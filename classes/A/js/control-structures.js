const products = require("./data/products");

// estructuras de control, funciones, clases, jueves git, git-flow, prmoesas.

//IF

if (34 === "34") {
  console.log("Hola :3");
}

// falsy

/**
 * false
 * null
 * undefined
 * ""
 * 0
 * NAN
 */
// string + number
// number + string - NAN (not a number)

const user = null;
if (user) {
  console.log("usuario");
} else {
  console.log("el usuario no existe");
}

// function getUserById(id){
//     const user = dbConnection.findOne(id);
//     if (!user) {
//         return 404;
//     }
//     return user;
// }
// ternario, operador de corto circuito;

function getUserById(id) {
  const user = dbConnection.findOne(id);
  return user.isAdmin ? 200 : 403;
  //if (user.isAdmin) {
  //         return 200;
  //     }
  //     return 403;
}

if (isAdmin) {
  user = "juan";
}

user = "juan" && isAdmin;

// server.start() && dbIsConnected();

for (let index = 0; index < products.length; index++) {
  //   if (products[index].price === 1299) {
  //     return products[index];
  //   } else {
  //     return null;
  //   }
  return products[index].price === 1299 ? products[index] : null;
}

const product = products.find((product) => product.price === 1299);
const expensiveProducts = products.filter((p) => p.price > 5000);

let aux = [];

for (let index = 0; index < products.length; index++) {
  /**
     *  {
     *  id: 0
        name: "Laptop Pro 14",
        price: 18999,
        desc: "Laptop ligera con pantalla de 14 pulgadas, 16 GB de RAM y SSD de 512 GB.",
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
        },
     * 
     */
  aux.push({ id: index, ...products[index] });
}

products.map((p, index) => {
  return { id: index, ...p };
});

const profile = {
  name: "",
  rol: "",
  email: "",
  password: "",
};

user.map((u) => {
  return {
    name: "",
    rol: "",
    email: "",
  };
});
