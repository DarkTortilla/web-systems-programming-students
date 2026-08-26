const { products } = require("./data");

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
    console.log('finally');
  });

  const user = {
    id:3,
    name:'',
    lastName,
  }
  const userConf = {
    id: 1,
    name:'',
    mode:'dark',
    userId:3,
  }
