// Esto es una funcion
(() => {})();

function suma(a, b) {
  return a + b;
}
suma("12", "25"); // 1225

function division(a, b) {
  if (b === 0) {
    return "error";
  }
  return a / b;
}
const array = [12, 23, 56, 45];
array.filter((n) => n > 50);
function GT50(n) {
  return n > 50;
}

const suma2 = (a, b) => a + b;

suma2(2, 5);

const div2 = (a, b) => {
  if (b === 0) {
    return "error";
  }
  return a / b;
};

const div3 = (a, b) => b === 0 ? "error" : a / b;

const login = (email, password) => isRegistered(email, password) ? 200 : 401;

const user = {
    name:'',
    lastName:'',
    email:'',
    password:'',
    role:'admin',
}

const isAdmin = (user) => user.role === 'admin';

isAdmin(user);


(() => {
    dataBaseConnection.start();
    server.start();
})();

function main(){

}
main();

{
  /* <input type='text' placeholder="ingrese el precio del producto"></input> */
}
