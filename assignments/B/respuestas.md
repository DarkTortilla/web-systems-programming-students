
**Nivel:** universitario avanzado  
**Duración sugerida:** 120 minutos  
**Valor:** 120 puntos

## Contexto e instrucciones

La tienda necesita incorporar categorías, marcas, carritos y direcciones de envío. Utiliza Express, TypeScript, Sequelize y mysql2, siguiendo los conceptos trabajados en clase.

En cada ejercicio de análisis identifica los distintos errores, explica una consecuencia concreta y propone cómo corregir cada uno. Cuando se solicite código, escribe TypeScript y muestra los imports necesarios; puedes omitir detalles de configuración ya existentes. Una afirmación sin explicación ni corrección no recibe el puntaje completo. No se requiere crear una aplicación completa.

## Parte I. Análisis de código (80 puntos)

### 1. Creación de una marca (15 puntos) 

```ts
import type { Request, Response } from "express";
import { Sequelize, DataTypes } from "sequelize";

export async function createBrand(req: Request, res: Response) {
  const db = new Sequelize("store", "root", "root", { //credenciales deberian de estar en un .env
    host: "localhost",
    dialect: "mysql",
    logging: console.log,  // dev
  }); // la conexion deberia estar en otro archivo
  const Brand = db.define("Brand", {
    name: { type: DataTypes.STRING, allowNull: false },
    isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
  }); //en su carpeta de modelos

  try {
    const brand = await Brand.create(req.body); // nada indica que se valida los datos
    return res.status(200).json(brand); //201
  } catch (error) {
    return res.status(500).json({ message: 'internal server error'});// puede exponer detalles internos al usuario
  }
}
```

### 2. Consulta de una dirección (15 puntos)

```ts
import type { Request, Response } from "express";
import type { RowDataPacket } from "mysql2";
import { pool } from "../conf/dbConnection.ts";

export async function getAddress(req: Request, res: Response) {
  try {
    const id = req.body.id; // id en params
    const [rows] = await pool.query<RowDataPacket[]>(
      `SELECT id, user_id, street, city FROM shipping_addresses WHERE id = ${id}`, //inyeccion sql
    );
    if (rows.length === 0) {
      return res.status(200).json({ message: "address not found" }); //404
    }
    return res.json(rows); // rows[0] 
  } catch (error) {
    return res.status(500).json({ message: String(error)  /*'internal server error'*/ }); //envia el error

  }
}
```
No supongas que el sistema ya cuenta con autenticación.

### 3. Ruta y controlador para crear una dirección (10 puntos)

```ts
//  GET 'users?email='
router.get('/address', async (req, res, next) => { //post, separacion de responsabilidades
  const { id, name, type } = req.headers; // los datos de la peticion estan en los headers
  // nunca se validan los datos 
  try {
    const [rows] = await pool.query(
      `SELECT card_number
       FROM payment_cards
       WHERE user_id = ${id}`,
    ); // inyección SQL: usar parámetros en la consulta
    // se mezclan mysql2 y Sequelize en el mismo controlador

    const address = await ShippingAddress.create({
      userId: id,
      name,
      type,
      cardNumber: rows[0].card_number, // puede no existir la tarjeta; no guardar su número en la dirección
    });

    return res.json(address); // 201; devolver solo campos necesarios
  } catch (error) {
    return next(error);
  }
});
```

### 4. Controlador PATCH para establecer un método de pago predeterminado (10 puntos)

```ts
import type { Request, Response } from "express";
import { PaymentMethod } from "../models/index.ts";

export async function setDefaultPaymentMethod(req: Request, res: Response) {
  try {
    const userId = Number(req.params.userId);  // validar que sea un entero positivo
    const paymentMethodId = Number(req.params.paymentMethodId); // validar que sea un entero positivo

    const paymentMethod = await PaymentMethod.findOne({
      where: { id: paymentMethodId, userId },
    });

    if (!paymentMethod) {
      /*return*/  res.status(404).json({ message: "payment method not found" });
    }

    await PaymentMethod.update(
      { isDefault: false },
      { where: { userId } },
    );
    await paymentMethod!.update({ isDefault: true }); 

    return res.json({
      id: paymentMethod!.id,
      isDefault: paymentMethod!.isDefault,
    });
  } catch(e) {

  return res.status(500).json({ message: "internal server error" });
  }
}
```

### 5. DTO y actualización de una categoría (15 puntos)

```ts
import type { Request, Response } from "express";
import { Category } from "../models/index.ts";

class UpdateCategoryDto {
  private constructor(private  name: string, public readonly isActive: boolean) {} // determinar qué campos se permite actualizar

  static create(input: any): UpdateCategoryDto { //no se valida nada
    return new UpdateCategoryDto(input.name as string, input.isActive as boolean);
  }
}

export async function updateCategory(req: Request, res: Response) {
  try {
    const dto = UpdateCategoryDto.create(req.body);
    const category = await Category.findByPk(Number(req.params.id));
    if (!category) return res.status(404).json({ message: "not found" });
  
    // name:' ' , id: -5
    category.set({ ...dto, ...req.body }); // req.body sobrescribe el DTO y agrega campos no permitidos
    await category.save();
    return res.json(category);
  } catch {
    return res.status(500).json({ message: "internal server error" });
  }
}
```

En caso de errores de validacion escribe las validaciones basicas.

```ts
// Validación básica para los campos del DTO del ejemplo:
// if (!input || typeof input !== "object" || Array.isArray(input)) {
//   throw new Error("Datos inválidos");
// }
// const { name, isActive } = input as Record<string, unknown>;
// if (typeof name !== "string" || !name.trim()) {
//   throw new Error("Nombre inválido");
// }
// if (typeof isActive !== "boolean") {
//   throw new Error("Estado inválido");
// }
// return new UpdateCategoryDto(name.trim(), isActive);
// En el controlador, usar solo los campos validados y responder 400 si son inválidos.
```

### 6. Cuenta de usuario y contraseña (15 puntos)

```ts
import type { Request, Response } from "express";
import { User } from "../models/index.ts";


export async function createUser(req: Request, res: Response) {
  try {
    const { name, lastName, email, age, password, role } = req.body; // no se valida nada
    const user = await User.create({
      name, lastName, email, age, password, role, // el cliente controla el rol; falta generar el hash de la contraseña
      isActive: true,
    });
    return res.status(201).json({ message: "user created", user }); // no se eliminan datos sensibles
  } catch { // evita futura observabilidad
    return res.status(500).json({ message: "internal server error" });
  }
}
```


## Parte II. Escritura de código (40 puntos)

### 7. DTO de creación de marca (10 puntos)

Implementa `CreateBrandDto` con constructor privado y método estático `create(input: unknown)`. Acepta un objeto con `name` y `country`, ambos obligatorios, de tipo string y con contenido distinto de espacios. Devuelve ambos valores sin espacios al inicio ni al final. Rechaza entradas inválidas con un error y no copies campos adicionales. Muestra dos entradas rechazadas y una aceptada con el resultado esperado.

```ts
// export class CreateBrandDto {
//   private constructor(private name: string, private country: string) {}
//
//   static create(input: unknown): CreateBrandDto {
//     if (!input || typeof input !== "object" || Array.isArray(input)) {
//       throw new Error("Datos inválidos");
//     }
//     const { name, country } = input as Record<string, unknown>;
//     if (typeof name !== "string" || !name.trim()) {
//       throw new Error("Nombre inválido");
//     }
//     if (typeof country !== "string" || !country.trim()) {
//       throw new Error("País inválido");
//     }
//     return new CreateBrandDto(name.trim(), country.trim());
//   }
// }
// CreateBrandDto.create(null); // Error
// CreateBrandDto.create({ name: " ", country: "México" }); // Error
// CreateBrandDto.create({ name: " Marca ", country: " México " });
// Resultado: { name: "Marca", country: "México" }
```

### 8. Modelo de categoría (10 puntos)

Escribe un modelo Sequelize `Category` con el patrón `sequelize.define` y la conexión existente. Incluye `id` entero autoincremental y llave primaria; `name` string obligatorio y único; `description` string obligatoria; `isActive` booleano con valor predeterminado `true`; y timestamps. Declara una interfaz de instancia coherente con los atributos, incluyendo fechas. Exporta el modelo y muestra cómo incorporarlo al archivo de modelos del proyecto.

```ts
// models/Category.ts
// import { DataTypes, Model } from "sequelize";
// import sequelizeConnection from "../conf/sequelize.connection.ts";
//
// interface ICategory extends Model {
//   id: number;
//   name: string;
//   description: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }
//
// const Category = sequelizeConnection.getSequelize().define<ICategory>("Category", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
//   name: { type: DataTypes.STRING, allowNull: false, unique: true },
//   description: { type: DataTypes.STRING, allowNull: false },
//   isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
// }, { timestamps: true });
//
// export default Category;
// En models/index.ts: export { default as Category } from "./Category.ts";
```

### 9. Controlador de dirección de envío (10 puntos)

Implementa `getShippingAddressById` con Express y Sequelize. Supón que `ShippingAddress.findByPk(id)` devuelve una instancia con `id`, `street`, `city`, `postalCode` y `userId`, o `null`. El identificador debe ser un entero positivo; responde con 400 si no lo es, 404 si no existe y 200 con solo `id`, `street`, `city` y `postalCode` si existe. Ante un error inesperado responde 500 con un mensaje genérico. No implementes el modelo ni autenticación.

```ts
// import type { Request, Response } from "express";
// import { ShippingAddress } from "../models/index.ts";
//
// export async function getShippingAddressById(req: Request, res: Response) {
//   const rawId = req.params.id;
//   if (typeof rawId !== "string" || !/^\d+$/.test(rawId)) {
//     return res.status(400).json({ message: "invalid id" });
//   }
//   const id = Number(rawId);
//   if (!Number.isSafeInteger(id) || id <= 0) {
//     return res.status(400).json({ message: "invalid id" });
//   }
//   try {
//     const address = await ShippingAddress.findByPk(id);
//     if (!address) return res.status(404).json({ message: "address not found" });
//     return res.status(200).json({
//       id: address.id,
//       street: address.street,
//       city: address.city,
//       postalCode: address.postalCode,
//     });
//   } catch {
//     return res.status(500).json({ message: "internal server error" });
//   }
// }
```

### 10. Prueba unitaria de una función de paginación (10 puntos)

Considera la siguiente función ubicada en `src/utils/pagination.ts`:

```ts
export function getPagination(page: number = 1, limit: number = 10) {
  const safePage =
    Number.isSafeInteger(page) && page > 0 ? page : 1;

  const safeLimit =
    Number.isSafeInteger(limit) && limit > 0
      ? Math.min(limit, 100)
      : 10;
  //pagination(2, 10) => {page:2, limit:10, offset: 10 }
  return {
    page: safePage,
    limit: safeLimit,
    offset: (safePage - 1) * safeLimit,
  };
}
```

La función recibe el número de página y el límite de elementos por página. Si `page` no es un entero seguro positivo, utiliza `1`; si `limit` no es un entero seguro positivo, utiliza `10`. Además, limita `limit` a un máximo de `100`. Finalmente, calcula `offset` con la fórmula `(page - 1) * limit`.

Escribe una prueba unitaria completa para `getPagination`. La prueba debe verificar como mínimo:

- Los valores predeterminados cuando no se proporcionan argumentos.
- Una página y un límite válidos.
- Un `page` inválido, como `0`, un número negativo o un decimal.
- Un `limit` inválido.
- El límite máximo de `100` cuando se recibe un valor mayor.
- El cálculo correcto de `offset`.

Organiza los casos con `describe` e `it` o `test`, y utiliza aserciones explícitas (toBe) para comprobar el objeto completo devuelto por la función. 

```ts
// tests/src/pagination.test.ts
// import { describe, expect, it } from "vitest";
// import { getPagination } from "../../src/utils/pagination.ts";
//
// describe("getPagination", () => {
//   it("usa valores predeterminados", () => {
//     const result = getPagination();
//     expect(result.page).toBe(1);
//     expect(result.limit).toBe(10);
//     expect(result.offset).toBe(0);
//   });
//   it("calcula el offset de una página válida", () => {
//     const result = getPagination(2, 15);
//     expect(result.page).toBe(2);
//     expect(result.limit).toBe(15);
//     expect(result.offset).toBe(15);
//   });
//   it("sustituye una página inválida", () => {
//     const result = getPagination(0, 15);
//     expect(result.page).toBe(1);
//     expect(result.limit).toBe(15);
//     expect(result.offset).toBe(0);
//   });
//   it("sustituye un límite inválido", () => {
//     const result = getPagination(3, -1);
//     expect(result.page).toBe(3);
//     expect(result.limit).toBe(10);
//     expect(result.offset).toBe(20);
//   });
//   it("limita el máximo a 100", () => {
//     const result = getPagination(2, 150);
//     expect(result.page).toBe(2);
//     expect(result.limit).toBe(100);
//     expect(result.offset).toBe(100);
//   });
// });
// toBe compara objetos por referencia; por eso se comprueba cada propiedad.
```

## Parte III. Definicion de conceptos (15 puntos extra)

¿Qué es un API? escribe una definicion con un ejemplo concreto que no sea ana api restfull o like-rest

<!-- Una API es una interfaz que permite a un programa utilizar funciones de otro componente. Ejemplo: la API de arreglos de JavaScript, como array.map(). -->

