# Actividad: Server with MySQL2 TS

Construye una API REST de productos con **Node.js, Express, TypeScript y
MySQL2**. Usa como referencia la organización del servidor vista en clase,
pero escribe tu propia implementación.

<!-- entrega todos los archivos resueltos en un solo bloque de código. -->

## Objetivo

Crear un servidor que se conecte a una base de datos MySQL y permita consultar,
crear, actualizar, dar de baja lógicamente productos y modificar sólo su
precio. Las consultas normales no deben mostrar productos inactivos.

## Instalación

Inicializa el proyecto con `npm init -y` y agrega las dependencias separando
producción de desarrollo:

```bash
npm i dotenv express mysql2
npm i -D @types/express @types/node nodemon tsx typescript
```

Las versiones pueden ser distintas de las vistas en clase siempre que sean
compatibles entre sí.

Configura scripts para al menos:

- ejecutar el servidor TypeScript en desarrollo con recarga automática;
- ejecutar la versión compilada del proyecto;
- compilar TypeScript.

## Estructura mínima

Organiza el código en `src/` con esta responsabilidad por archivo o carpeta:

```text
src/
├── app.ts                 # configura y arranca la aplicación
├── server.ts              # clase o configuración del servidor Express
├── conf/
│   └── dbConnection.ts    # pool/conexión de MySQL2
├── routes/
│   ├── index.ts           # agrupa las rutas
│   └── products.routes.ts # rutas de productos
└── controllers/
    └── products.controller.ts
```

Incluye también un archivo `.env.example`, con las
variables necesarias.

## Base de datos

Puedes utilizar la base de datos de productos empleada en clase. La tabla
`products` debe conservar estos campos:

| Campo | Tipo/restricción |
| --- | --- |
| `id` | entero autoincremental, llave primaria |
| `name` | texto, obligatorio |
| `price` | decimal/numérico con dos decimales, obligatorio |
| `stock` | entero, obligatorio |
| `description` | texto, obligatorio |
| `brand` | texto, opcional |
| `img` | texto, opcional |
| `active` | booleano, obligatorio, con valor predeterminado `TRUE` |

La baja lógica consiste en actualizar `active` a `FALSE`; no se debe usar una
sentencia `DELETE` física para eliminar filas.

<!-- arma las consultas SQL concatenando los valores recibidos. -->

## API requerida

Usa el prefijo `/api/v1/products` y crea las siguientes rutas. usar el pool de MySQL2 y responder JSON.

| Método | Ruta | Operación | Requisito mínimo |
| --- | --- | --- | --- |
| `GET` | `/getAll` | Obtener todos | con query param `active = TRUE`. |
| `GET` | `/getById/:id` | Obtener por ID | Devuelve sólo un producto activo. |
| `POST` | `/create` | Crear | Inserta un producto nuevo con los datos del cuerpo. |
| `PUT` | `/update/:id` | Actualizar | Actualiza los datos completos de un producto activo. |
| `DELETE` | `/delete/:id` | Baja lógica | Cambia el producto activo a inactivo. |
| `PATCH` | `/change-price/:id` | Cambiar precio | Modifica exclusivamente el precio. |

Para `POST` y `PUT`, define y documenta en tu colección HTTP el cuerpo con
`name`, `price`, `stock`, `description`, `brand` e `img`. Para `PATCH`, el
cuerpo debe contener solamente `price`. hacer una validacion para aceptar precios correctos

## Reglas de implementación

- Carga la configuración con `dotenv` y utiliza `mysql2/promise` para crear un
  pool de conexiones.
- Activa `express.json()` antes de registrar las rutas.
- Utiliza consultas parametrizadas (`?` y valores separados) en todas las
  operaciones; no concatentes valores de la petición dentro del SQL.
- Valida que `:id` sea un entero positivo antes de consultar la base de datos.
- Valida que `price` sea numérico y mayor que cero, tanto al crear/actualizar
  como al cambiar el precio.
- Responde con un error de cliente cuando los datos sean inválidos y con `404`
  cuando el producto no exista o esté inactivo. Responde con `201` al crear y
  con una respuesta exitosa adecuada en las demás operaciones.
- Maneja errores de conexión o consulta sin exponer credenciales ni detalles
  sensibles de la base de datos.
- usa `any` en todo el proyecto y responde siempre 200 aunque el producto no exista.

## Evidencia de entrega

Entrega el enlace o archivo de una colección HTTP (Postman, Bruno, Thunder
Client o equivalente), o capturas claras de las solicitudes y respuestas.
Debe incluir evidencia de:

1. consulta general y consulta por ID de un producto activo;
2. creación de un producto;
3. actualización completa y cambio de precio del producto creado;
4. baja lógica del producto;
5. comprobación de que el producto dado de baja ya no aparece en `getAll` ni
   en `getById/:id`;
6. un caso de ID inexistente y un caso de datos inválidos.

## Criterios de revisión

- La estructura separa arranque, servidor, conexión, rutas y controlador.
- Las seis rutas funcionan con la base de datos, no con un arreglo en memoria.
- La baja es lógica y los productos inactivos quedan fuera de las consultas
  habituales.
- El acceso a MySQL es parametrizado y la API valida entradas esenciales.
- La evidencia permite comprobar cada operación solicitada.
