// int suma(int a, int b){
//     return a+b
// }
//* */
function suma(a, b) {
  return a + b;
}

console.log(suma(1, 2)); //3

suma("1", "2");

const suma2 = (a, b) => {
  if (b === 0) {
    return "error";
  }
  return a + b;
};

const suma3 = (a, b) => a + b;

const mult = (a, b) => a * b;

//false, "", 0, NAN, null, undefined
const div = (a, b) => (b !== 0 ? a / b : "error");

// si el array esta vacio regresmos isEmpty de lo contrario regresamos el array

const array = [12, 2, 56];

const arrayIsEmpty = (array) => (array.length === 0 ? "isEmpty" : array);

const user = {
  name: "",
  lastName: "",
  email: "",
  role: "admin",
};

const isAdmin = (user) => user.role === "admin" ? true : false;

isAdmin(user);

(()=>dataBase.connect())();

function main(){

}
main();


array.filter(
  (a) => a > 4
);



array.filter(filterFn);

function filterFn(a) {
  return a > 4;
}

//Callback
const findIva = (price) => price * 0.16; 

//callback hell
const calculateTaxes=(product, callback) => {
  if (!product) {
    return 'error';
  }
  return callback(product.price);
}
const product = {
  name:'',
  price: 5000
}

console.log(calculateTaxes(product, findIva));
calculateTaxes(product, (p)=>p>5000?p*0.2 : 0.16);



// '12'
/*
<input type="text" placeholder='precio de producto'></input>
*/
