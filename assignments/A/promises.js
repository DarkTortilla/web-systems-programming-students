const products = require("../data/products");
const users = require("../data/users");
const usersConf = require("../data/userconf");

//devolver todos los productos mayores iguales a un precio establecido con una promesa

const findProductsByPrice = (price) => {
  return new Promise((resolve, reject) => {
    if (price <= 0) {
      reject("el precio debe ser positivo");
      return;
    }
    const newProducts = products.filter((p) => p.price >= price);
    if (newProducts) {
      resolve(newProducts);
      return;
    }
    reject("No hay productos");
  });
};

// en base al id de un usuario se debe obtener
// la informacion completa del usuario mas su configuracion
//ejemplo
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
const findUserDataById = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);
    if (!user) {
      reject("user not found");
      return;
    }
    const conf = usersConf.find((uConf) => uConf.userId === user.id);
    if (!conf) {
      reject("conf not found");
      return;
    }
    resolve({
        id:user.id,
        fullName: user.name + ' ' + user.lastName,
        confName: conf.name,
        mode: conf.mode,
        confId: conf.id
    });
  });
};

findUserDataById(3)
    .then(result => console.log(result))
    .catch()
    .finally()

    
