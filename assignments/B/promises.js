const products = require("../data/products");
const users = require("../data/users");
const usersConf = require("../data/userconf");

// devolver todos los productos mayores iguales
// a un precio establecido con una promesa

let price = 500;

const getProducts = (price) => {
  return new Promise((resolve, reject) => {
    const filteredProducts = products.filter((p) => p.price >= price);
    if (filteredProducts.length === 0) {
      reject("products not found");
      return;
    }
    resolve(filteredProducts);
  });
};

// en base al id de un usuario se debe obtener
// la informacion completa del usuario mas su configuracion
//ejemplo

const findUserDataById = (id) => {
  return new Promise((resolve, reject) => {
    const userData = users.find((u) => u.id === id);
    const userConf = usersConf.find((conf) => conf.userId === id);

    if (!userData) {
      reject("user not found");
      return;
    }
    if(!userConf) {
      reject("conf not found");
      return;
    }
    resolve({
      id: userData.id,
      fullName: `${userData.name} ${userData.lastName}`,
      confName: userConf.name,
      mode: userConf.mode,
      confId: userConf.id,
    });
  });
};

findUserDataById(3)
.then()
.catch();

/**
 * id: 3
 * {
 *  id:3,
 *  fullName:'',
 *  confName:'',
 *  mode:'',
 *  confId
 * }
 */
