const products = require("./data/products");
if (34=='34') {
    console.log('...');
}
if(34==='34'){
    console.log('****')
}

const obj = {};
const num = 0;

if (obj) {
    console.log('objeto');
}
if (num) {
    console.log('numero')
}

/**
 * falsy
 * false
 * 0
 * undefined
 * null
 * ''
 * NAN
 */

// function getUserById(id){
//     const user = dbConnection.findOne(id);
//     if (!user) {
//         return 404;
//     }
//     return user;
// }

// Operador ternario 
function getUserById(id){
    const user = dbConnection.findOne(id);
    return user ? user : 404; 
}

// operador de corto circuito
isDBConneted() && server.start();

/// for

for (let index = 0; index < products.length; index++) {
    if (products[index].price===1299) {
        return products[index];
    }
}

const product = products.find((p,index) => p.price===1299);
const expensiveProducts = products.filter(p => p.price >= 5000);
const updatedProducts = products.map((p, index)=> {
    return { id: index, ...p }
})

const numbers = [1,2,5,6,51,35];

const doble = numbers.map(n => n*2); // [2,4,10, 102, 70];


const user = {
    user:'',
    email:'',
    password:''
}