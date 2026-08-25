//IF 

let data = true;

if (data) {
    console.log('...')
}

let num = 32;

if (num==='32') {
    console.log('...');

}

//falsy values

let person = null;

if(person){
    console.log('peorsna')
}

/**
 * 
 * false
 * undefined
 * null
 * 0
 * ''
 * NAN -> 'r'+3 = 'r3' !== 3+'r' =NAN
 * 
 * 
 */


// function getUserById(id) {
//     const user = RTCPeerConnection.find(id);
//     if(!user){
//         return 404; 
//     }
//     return user;
// }

const isAdmin = false;

if(isAdmin){
    user= 'juan'
}
else{
    user= 'Pedro'
}

// Ternario

isAdmin ? user='juan' : user ='pedro';
let isActive = false;

function getUserById(id) {
    const user = RTCPeerConnection.find(id);
    return user ? user : 404;
}

// operador de corto circuito 

user ='Juan' && isActive;

let users = [];


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


const products = required('./data.js');

products
