const products = require("./data/products");
const users = require("./data/users");
const userConf = require("./data/userconf");

const findProduct = new Promise((resolve, reject) => {
  const product = products.find((p) => p.price === 2199);
  if (product) {
    resolve(product);
    return;
  }
  reject("product not found");
});

let isLoading = true;
findProduct
  .then((product) => console.log(product))
  .catch((err) => console.error(err))
  .finally(() => {
    isLoading = false;
    console.log("executed...");
  });

const findUserById = (userId) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === userId);
    if (user) {
      resolve(user);
      return;
    }
    reject("user not found");
  });
};

const findConfByUserId = (userId) => {
  return new Promise((resolve, reject) => {
    const conf = userConf.find((c) => c.userId === userId);
    if (conf) {
      resolve(conf);
      return;
    }
    reject("user not found");
  });
};

let id = 3;
// Promise hell
findUserById(id)
  .then((u) => {
    findConfByUserId(id)
      .then((conf) => {
        console.log(u, conf);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));

const list = [1,21,352,21,5351,6,851,312,45];
// const num1 = list[0];
const [num1, num2, num3] = list;

Promise.all([findUserById(id), findConfByUserId(id)])
.then(([user, confUser])=>{
  console.log(user, confUser);
})
.catch(err=>console.error(err))
