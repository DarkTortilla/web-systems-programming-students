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
  .then((p) => console.log(p))
  .catch((err) => console.error(err))
  .finally(() => {
    isLoading = false;
    console.log("Finally...");
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
    const conf = userConf.find((c) => c.userId === userId);
    if (conf) {
      resolve(conf);
      return;
    }
    reject("conf not found");
  });
};

//promise hell
findUserById(3)
  .then((u) => {
    findConfByUserId(/*u.id*/ 3)
      .then((conf) => {
        console.log(u);
        console.log(conf);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err))
  .finally();

//Promise all
const list = [12,13,564,1161,656,312,184,96];
// const num1 = list[0];

const [num1, num2] = list;

// const [user, setUser] = useState({});

Promise.all([findUserById(3), findConfByUserId(3)])
  .then(([user, conf]) => {
    console.log(user,conf);
    
    // const [user, conf] = array;
    // const user = array[0];
    // const conf = array[1];
  })
  .catch((err) => console.error(err));

