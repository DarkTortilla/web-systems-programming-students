const products = require("../data/products");
const users = require("../data/users");
const userConf = require("../data/userconf");

const calcularTotalPedido = (pedido) => {
  let total = 0;
  if (!pedido) {
    return "El pedido está vacio";
  }
  for (let index = 0; index < pedido.length; index++) {
    const id = pedido[index].id;
    const cantidad = pedido[index].cantidad;

    if (cantidad <= 0) {
      return "Cantidad invalida para el producto";
    }
    const product = products.find((p) => p.id === id);
    if (!product) {
      return "producto no encontrado: " + id;
    }

    total += product.price * cantidad;
  }
  return total;
};
///1000  
const crearCatalogoConDescuento = (limite, porcentaje) => {
  const newProducts = products.filter((p) => p.price <= limite);
  return porcentaje <= 100 && products >= 0
    ? newProducts.map((p) => ({
        id: p.id,
        name: p.name,
        originalPrice: p.price,
        discountedPrice: p.price - p.price * (porcentaje / 100),
      }))
    : "Porcentaje invalido";
};

// function calcularTotalPedido(pedido){

// }


const procesarProductos = (products, criterio, formateador)=>{
  
  
  if (typeof criterio === 'function') {
    
  }


}
