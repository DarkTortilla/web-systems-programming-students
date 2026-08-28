(()=>{})(); //esto es una funcion

function suma(a,b){
    return a+b;
}

suma('12','25'); //1225
//{/* <input type='text' placeholder="ingrese el precio del producto" ></input> */}

function div(a,b){
    if (b===0) {
        return 'error';
    }
    return a/b;
}

const suma2 = (a,b) => a+b; //arrow function

const div2 = (a,b) => { 
    if (b===0) {
        return 'error'
    }
    return a/b;
};

const div3 = (a,b) => b===0? 'error' : a/b;

const user = {
    name:'',
    latName:'',
    email:'',
    role: 'admin'
};

const isAdmin = (u) => u.role === 'admin';
isAdmin(user);

(()=>{
    //dataBase.connect();
    //server.start();
})();

function main(){
    //dataBase.connect();
    //server.start();
};

main();

const array =[12,36,5,6,89,2];

array.filter(n=>n>50);


const calculateIva = (price) => price*1.16;

const findTax=(product, callback)=>{
    if (!product) {
        return 'error';
    }
    if(typeof callback !=='function'){
        return 'callback must be a function';
    }
    callback(product.price);
}

const product = {
    id:1,
    name: '',
    price:15,
}

findTax(product, calculateIva);
findTax(product, p=>p>5000? p*1.2 : 1.1 );