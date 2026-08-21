//ptimitivos
const item = ""; // "" string;
const num = 5; // number
const flag = false; //boolean
const und = undefined;
const none = null;
const keySimbol = Symbol();

//Compuestos

/**
 * Arreglos
 *
 */
const array = [1, 2, 3, 4, 5, 6];

console.log(array.pop());
array.push(56);
//
const mix = ["asd", 43, false, new Date()];
console.log(mix[0]);
console.log(mix[45]);
mix[30] = "gubih";

const n = 45;
const value = 78;
if (mix[n]) {
  mix[n] = value;
}

// object (hashmap)

let person = {
  name: "juan",
  lastName: "Perez",
  age: 25,
  phone: 1234567890,
};

console.log(person.name);
console.log(person["name"]);

person.name = "Luis";

person.birthDay = "12/12/65";
console.log(person.name);

//Object.freeze(person);

let num2 = num;
console.log(num, num2);
num2 = 646;
console.log(num, num2);

const person2 = person;

console.log(person, person2);
person2.name = "Antonio";
console.log(person, person2);

/// Como generar una copia;

const person3 = { ...person };

const array2 = [...array];

const people = [
  {
    name: "juan",
    lastName: "Perez",
    age: 25,
    phone: 1234567890,
    addresses:[
        '',
        '',
        ''
    ]
  },
  { 
    name:"juan",
    lastName: "Perez",
    age: 25,
    phone: 1234567890
}
];

//const peopleCopy = [...people];

const peopleCopy = structuredClone(people);
