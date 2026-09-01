const products = require("../data/products");
const users = require("../data/users");
const usersConf = require("../data/userconf");

//devolver todos los productos mayores iguales a un precio establecido
const getAllData = (price) => {
  return new Promise((resolve, reject) => {
    const filterProducts = products.filter((p) => p.price >= price);
    if (price <= 0) {
      reject("el precio debe ser positivo");
      return;
    }
    if (!filterProducts) {
      resolve(filterProducts);
      return;
    }
    reject("no hay productos que cumplan la condicion");
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

const getUserInfoByUserId = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);
    const conf = usersConf.find((c) => c.userId === id);
    if (!user || !conf) {
      reject("datos no encontrados");
      return;
    }

    const result = {
      id: user.id,
      fullName: user.name + " " + user.lastName,
      confName: conf.name,
      mode: conf.mode,
      confId: conf.id,
    };
    resolve(result)
  });
};

getUserInfoByUserId(3)
    .then(result => {
        console.log(result)
        //respose.status(200).json(result);
    } )
    .catch( err=> console.log(err) )