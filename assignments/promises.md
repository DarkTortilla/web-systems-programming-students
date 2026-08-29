# Ejercicios de promesas

Estos ejercicios utilizan los archivos disponibles en `data/`. Crea tu propio
archivo JavaScript dentro de `assignments/` y carga los datos que necesites con
CommonJS:

```js
const products = require("./data/products");
const users = require("./data/users");
const userConf = require("./data/userconf");
```

## Reglas generales

- Crea y consume promesas con `new Promise`, `.then()`, `.catch()` y
  `.finally()`.
- Retorna una promesa cuando una función inicie una operación.
- Retorna cada promesa intermedia para conservar la cadena.
- Accede a objetos y resultados mediante propiedades e índices.

## Pichón de bootcamp

### Ejercicio P1: Validación de un pedido

Convierte la validación y el cálculo de un pedido en una operación basada en
promesas.

Implementa:

```js
validarPedido(pedido)
```

#### Requisitos

- La función debe devolver una promesa.
- Recorre el pedido, localiza cada producto con `find` y calcula el total.
- Resuelve la promesa con el total cuando todo el pedido sea válido.
- Rechaza con `"El pedido está vacío"` si no contiene elementos.
- Rechaza con `"Cantidad inválida para el producto ID"` si una cantidad es
  menor o igual a cero.
- Rechaza con `"Producto ID no encontrado"` si un producto no existe.
- Rechaza al encontrar el primer elemento inválido.

#### Ejemplos de consumo

```js
validarPedido([
  { productId: 2, cantidad: 2 },
  { productId: 4, cantidad: 1 },
])
  .then((total) => console.log(total))
  .catch((error) => console.error(error));
// 4197

validarPedido([{ productId: 99, cantidad: 1 }])
  .then((total) => console.log(total))
  .catch((error) => console.error(error));
// "Producto 99 no encontrado"
```

## Senior HTML developer

### Ejercicio P2: Refactorizar un Promise Hell

El siguiente flujo funciona, pero contiene cuatro promesas anidadas, maneja el
mismo error en varios lugares y finaliza la carga antes de que todas las
operaciones internas hayan terminado.

```js
let isLoading = true;

buscarUsuarioPorCorreo("ana.lopez@example.com")
  .then((user) => {
    buscarConfiguracionPorUsuario(user.id)
      .then((configuration) => {
        recomendarProductoPorModo(configuration.mode)
          .then((product) => {
            calcularMensualidad(product, 6)
              .then((result) => {
                console.log(result);
              })
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error))
  .finally(() => {
    isLoading = false;
  });
```

Las cuatro funciones usadas en el flujo deben cumplir estos contratos:

- `buscarUsuarioPorCorreo(correo)` resuelve con un usuario.
- `buscarConfiguracionPorUsuario(userId)` resuelve con su configuración.
- `recomendarProductoPorModo(mode)` resuelve con el producto de id `1` para
  `dark` y con el producto de id `3` para `light`.
- `calcularMensualidad(product, meses)` resuelve con un objeto que contiene
  `productName`, `months` y `monthlyPayment`. Debe rechazar si `meses` es menor
  o igual a cero.

#### Tu tarea

- Implementa o reutiliza las cuatro funciones que devuelven promesas.
- Usa Promise.all para manejar las promesas
- Deja exactamente un `.finally()` y úsalo para cambiar `isLoading` a `false`.
- No anides `.then()` y no utilices `async/await`.

#### Resultado esperado

Con el correo de Ana y seis meses, la recomendación corresponde a la laptop:

```js
// {
//   productName: "Laptop Pro 14",
//   months: 6,
//   monthlyPayment: 3166.5,
// }
// isLoading termina con el valor false
```
