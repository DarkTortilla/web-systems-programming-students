let name_ = "Frank";
name_ = 5;

console.log("r" + 5);

// Primitivos

let email = "example@example.com";
let phone = 1234567890;
let flag = true;
let id1 = Symbol("id");
let id2 = Symbol("id");
none = undefined;
//person = null;

//const item = localStorage.length;

let query = null;

//Compuestos

//Array, vector, lista

const array = [123, 465, 789, 132, 654];

array.pop();
array.push(213);

const mix = ["WTF", 511, false, new Date()];
mix[10] = 10;
console.log(mix[10], mix);

// Objetos de js -> struct c

let person = {
  name: "Juan",
  lastName: "Tolley",
  age: 25,
  phone: 1235468790,
};
let key = "name";
console.log(person.name, person[key]);

person.name = "Jose";
console.log(person);
person.addresses = [];
//Object.freeze(person);

//
const person2 = person;

person2.name = "Luis";

console.log(person, person2);

//
person3 = { ...person };
array2 = [...mix];

const people = [
  {
    name: "Juan",
    lastName: "Tolley",
    age: 25,
    phone: 1235468790,
  },
  {
    name: "Juan",
    lastName: "Tolley",
    age: 25,
    phone: 1235468790,
  },
];

// const peopleCopy = [...people];
let peopleCopy= structuredClone(people);

peopleCopy[0].name='Lau';

console.log(people, peopleCopy);

