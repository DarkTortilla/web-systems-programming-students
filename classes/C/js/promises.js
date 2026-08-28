const products = require("./data/products");
const users = require("./data/users");
const userConf = require("./data/userconf");

const findProduct = new Promise((resolve, reject) => {
  const product = products.find((product) => product.price === 1299);
  if (product) {
    resolve(products);
    return;
  }
  reject("Product not found");
});

let isLoading = true;

findProduct
  .then((p) => {
    console.log(p);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    isLoading = false;
    console.log("finally");
  });

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      resolve(user);
      return;
    }
    reject("user not found");
  });
};

const findConfByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const conf = userConf.find((conf) => userId === conf.userId);
    conf ? resolve(conf) : reject("conf not found");
    return;
  });
};

//promise hell
findUserById(3)
  .then((user) => {
    findConfByUserId(/*user.id*/ 3)
      .then((conf) => {
        console.log(user, conf);
      })
      .catch((err) => {});
  })
  .catch((err) => {
    console.error(err);
  });

  const list = [53,12,515,6,68,3,235];
  const [num1, num2] =list;

Promise.all([findUserById(3), findConfByUserId(3)])
  .then(([user, conf]) => {
    // const user = array[0];
    // const conf = array[1];
  })
  .catch((err) => console.error(err));
