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
const products = [
  {
    name: "Laptop Pro 14",
    price: 18999,
    desc: "Laptop ligera con pantalla de 14 pulgadas, 16 GB de RAM y SSD de 512 GB.",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Audífonos inalámbricos",
    price: 1299,
    desc: "Audífonos Bluetooth con cancelación de ruido y hasta 30 horas de batería.",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Smartwatch Active",
    price: 2499,
    desc: "Reloj inteligente con monitor de actividad, ritmo cardiaco y GPS.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Teclado mecánico",
    price: 1599,
    desc: "Teclado mecánico compacto con iluminación RGB y switches táctiles.",
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cámara instantánea",
    price: 2199,
    desc: "Cámara instantánea con impresión de fotografías al momento.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
];

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


const user ={
    user:'',
    email:'',
    password:''
}