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
    id: 4,
    name: "Cámara instantánea",
    price: 2199,
    desc: "Cámara instantánea con impresión de fotografías al momento.",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
];

const findProduct = new Promise((resolve, reject) => {
  const product = products.find((p) => p.price === 2199);
  if (product) {
    resolve(product);
    return;
  }
  reject("product not found");
});

let isLoading = true;
findProduct
  .then((p) => console.log(p))
  .catch((err) => console.error(err))
  .finally(() => {
    isLoading = false;
    console.log("Finally...");
  });

const users = [
  {
    id: 3,
    name: "",
    lastName: "",
  },
];

const usersConf = [
  {
    id: 1,
    name: "",
    mode: "dark",
    userId: 3,
  },
];

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);
    if (user) {
      resolve(user);
      return;
    }
    reject("user not found");
  });
};

const findConfByUserId = (id) => {
  return new Promise((resolve, reject) => {
    const userConf = usersConf.find((u) => u.id === id);
    if (user) {
      resolve(userConf);
      return;
    }
    reject("user not found");
  });
};

//promise hell
findUserById(3)
  .then((u) => {
    findConfByUserId(u.id)
      .then((conf) => {
        console.log(u);
        console.log(conf);
      })
      .catch((err) => console.error(err));
  })
  .catch((err) => console.error(err))
  .finally();

  if (condition) {
    if (condition) {
        if (condition) {
            if (condition) {
                
            }
        }
    }
  }
