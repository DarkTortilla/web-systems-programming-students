# Ejercicios de funciones

Estos ejercicios utilizan los archivos disponibles en `data/`. Crea tu propio
archivo JavaScript dentro de `assignments/` y carga los datos que necesites con
CommonJS:

```js
const products = require("./data/products");
const users = require("./data/users");
const userConf = require("./data/userconf");
```

## Reglas generales

- Utiliza únicamente ciclos, condicionales, funciones declaradas o flecha,
  callbacks y los métodos `find`, `filter` y `map`.
- Accede a las propiedades directamente, por ejemplo `product.id`.
- No modifiques los arreglos ni los objetos originales de `data/`.

## Pichón de bootcamp

### Ejercicio F1: Total de un pedido

Una tienda recibe un pedido como un arreglo de objetos. Cada elemento contiene
el identificador de un producto y la cantidad solicitada.

Implementa:

```js
calcularTotalPedido(pedido)
```

#### Requisitos

- Recorre el pedido con un ciclo.
- Localiza cada producto mediante `find`.
- Multiplica el precio del producto por la cantidad solicitada y acumula el
  total.
- Si el pedido está vacío, devuelve `"El pedido está vacío"`.
- Si una cantidad es menor o igual a cero, devuelve
  `"Cantidad inválida para el producto ID"`.
- Si un producto no existe, devuelve `"Producto ID no encontrado"`.
- Detén el procesamiento al encontrar el primer elemento inválido.

#### Ejemplos

```js
calcularTotalPedido([
  { productId: 2, cantidad: 2 },
  { productId: 4, cantidad: 1 },
]);
// 4197

calcularTotalPedido([{ productId: 2, cantidad: 0 }]);
// "Cantidad inválida para el producto 2"

calcularTotalPedido([{ productId: 99, cantidad: 1 }]);
// "Producto 99 no encontrado"
```

### Ejercicio F2: Catálogo con descuento

La tienda quiere publicar un catálogo de productos que estén dentro del
presupuesto de un cliente y mostrar cuánto costarían después de un descuento.

Implementa:

```js
crearCatalogoConDescuento(limite, porcentaje)
```

#### Requisitos

- Selecciona con `filter` los productos cuyo precio sea menor o igual al
  límite.
- Transforma el resultado con `map`.
- Cada elemento nuevo debe contener `id`, `name`, `originalPrice` y
  `discountedPrice`.
- Calcula el descuento como un porcentaje entre `0` y `100`.
- Si el porcentaje no está dentro de ese intervalo, devuelve
  `"Porcentaje inválido"`.
- No modifiques los productos originales.

#### Ejemplo

```js
crearCatalogoConDescuento(2500, 10);
// [
//   { id: 2, name: "Audífonos inalámbricos", originalPrice: 1299, discountedPrice: 1169.1 },
//   { id: 3, name: "Smartwatch Active", originalPrice: 2499, discountedPrice: 2249.1 },
//   { id: 4, name: "Teclado mecánico", originalPrice: 1599, discountedPrice: 1439.1 },
//   { id: 5, name: "Cámara instantánea", originalPrice: 2199, discountedPrice: 1979.1 },
// ]

crearCatalogoConDescuento(2500, 120);
// "Porcentaje inválido"
```

## TS enjoyer

### Ejercicio F3: Perfiles de usuario

Los usuarios y sus configuraciones están guardados en arreglos diferentes.
Genera una lista que relacione ambos conjuntos de datos.

Implementa:

```js
generarPerfilesDeUsuario()
```

#### Requisitos

- Recorre `users` con `map`.
- Para cada usuario, localiza su configuración con `find` y `userId`.
- Devuelve objetos nuevos con `id`, `fullName`, `email` y `mode`.
- Construye `fullName` uniendo `name` y `lastName`.
- Si un usuario no tiene configuración, utiliza
  `"sin configuración"` como valor de `mode`.

#### Ejemplo

```js
generarPerfilesDeUsuario();
// [
//   { id: 3, fullName: "Juan Pérez", email: "juan.perez@example.com", mode: "dark" },
//   { id: 4, fullName: "Ana López", email: "ana.lopez@example.com", mode: "dark" },
//   { id: 17, fullName: "Luis García", email: "luis.garcia@example.com", mode: "light" },
// ]
```

## Senior HTML developer

### Ejercicio F4: Procesamiento con dos callbacks

Crea una función reutilizable para seleccionar productos y convertirlos en
líneas de un reporte. La función no debe conocer las reglas de selección ni el
formato final: ambas decisiones se recibirán como callbacks.

Implementa:

```js
procesarProductos(products, criterio, formateador)
```

#### Requisitos

- Si `criterio` no es una función, devuelve
  `"El criterio debe ser una función"`.
- Si `formateador` no es una función, devuelve
  `"El formateador debe ser una función"`.
- Usa `filter` para aplicar `criterio`.
- Usa `map` para aplicar `formateador` a los productos seleccionados.
- Devuelve un arreglo vacío cuando ningún producto cumpla el criterio.
- No modifiques `products`.

#### Ejemplos

```js
const criterio = (product) =>
  product.price >= 2000 && product.price <= 3000;
const formateador = (product) =>
  product.name + " | $" + product.price;

procesarProductos(products, criterio, formateador);
// ["Smartwatch Active | $2499", "Cámara instantánea | $2199"]

procesarProductos(products, "precio menor a 3000", formateador);
// "El criterio debe ser una función"
```
