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
