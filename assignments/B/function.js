const products = require("../data/products");
const users = require("../data/users");
const userConf = require("../data/userconf");

function calcularTotalPedido(pedido) {
  //   pedido.forEach((bolsa) => {
  //     const product = products.find(p => bolsa.productId === p.id);
  //   });
  let total = 0;

  if (!pedido || pedido.length === 0) {
    return "El pedido está vacío";
  }
  for (let index = 0; index < pedido.length; index++) {
    const productId = pedido[index].productId;
    const cantidad = pedido[index].cantidad;
    if (cantidad <= 0) {
      return "Cantidad inválida para el producto: " + productId;
    }
    const product = products.find((jose) => productId === jose.id);

    if (!product) {
      return "Producto " + productId + " no encontrado";
    }
    total += product.price * cantidad;
  }
  return total;
}

console.log(
  calcularTotalPedido([
    { productId: 2, cantidad: 2 },
    { productId: 4, cantidad: 1 },
  ]),
  calcularTotalPedido([{ productId: 2, cantidad: 0 }]),
  calcularTotalPedido([{ productId: 99, cantidad: 1 }]),
);
