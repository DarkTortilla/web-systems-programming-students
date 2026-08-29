const products = require("../data/products");
const users = require("../data/users");
const userConf = require("../data/userconf");

const calcularTotalPedido = (pedido) => {
  let total = 0;
  if (!pedido || pedido.length === 0) {
    return "El pedido está vacío";
  }
  for (let index = 0; index < pedido.length; index++) {
    const cantidad = pedido[index].cantidad;
    const productId = pedido[index].productId;
    if (cantidad <= 0) {
      return "Cantidad inválida para el producto: " + productId;
    }

    const product = products.find((product) => product.id === productId);

    if (!product) {
      return "Producto " + productId + " no encontrado";
    }
    total += product.price * cantidad;
  }
  return total;
};

console.log(
  calcularTotalPedido([
    { productId: 2, cantidad: 2 },
    { productId: 4, cantidad: 1 },
  ]),
  calcularTotalPedido([{ productId: 2, cantidad: 0 }]),
  calcularTotalPedido([{ productId: 99, cantidad: 1 }]),
);
