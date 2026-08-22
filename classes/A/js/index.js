//primitivos
let name_ = "Frank";
const num = 5;
const flag = false;
const id_1 = Symbol("id");
const id_2 = Symbol("id");

const none = undefined;
const null_ = null;

name_ = 5;

console.log("r" + 2);

console.log(name_);

//Compuestos
//Array, listas, vectores

const array = [12, 45, 56, 51, 12];

array.pop();
array.push(5);

const mix = ["51", 15, false, new Date()];

console.log(mix[0]);
mix[10] = 12;
console.log(mix);

//objetos -> struct c (hashMap)

const person = {
  name: "Luis",
  lastName: "Estrada",
  age: 52,
  phone: 1234567890,
};

console.log(person.name);
const key = "name";
console.log(person[key]);

person.name = "Juan";
console.log(person.name);

//Object.freeze(person);

let num2 = num;
console.log(num, num2);
num2 = 456;

console.log(num, num2);
//valores por referencia

const person2 = person;
console.log(person, person2);
person2.name = "Lau";
console.log(person, person2);

//operador de propagacion

person3 = { ...person };
const arrayCpy = [...array];

const people = [
  {
    name: "Luis",
    lastName: "Estrada",
    age: 52,
    phone: 1234567890,
  },
  {
    name: "Luis",
    lastName: "Estrada",
    age: 52,
    phone: 1234567890,
  },
  {
    name: "Luis",
    lastName: "Estrada",
    age: 52,
    phone: 1234567890,
  },
];

let peopleCpy = [...people];

peopleCpy[0].name = "Antonio";

console.log(people, peopleCpy);
// copia de la estructura
peopleCpy = structuredClone(people);

const products = [
  { name: "", price: 0, img: "" },
  { name: "", price: 0, img: "" },
  { name: "", price: 0, img: "" },
  { name: "", price: 0, img: "" },1
];

