const products = [
  { id: 1, name: "p1", price: 0 },
  { id: 2, name: "p2", price: 0 },
  { id: 3, name: "p3", price: 0 },
  { id: 4, name: "p4", price: 0 },
];

const productsContainer = document.querySelector("#products-list");


function createProductCards() {
  let html = "";
  products.forEach((p) => {
    html += ` <div class="product-card">
              <img src="" alt="" />
              <strong>${p.name}</strong>
              <p>${p.price}$</p>
              <button onclick="viewProduct(${p.id})">ver</button>
            </div>`;
  });
  return html;
}

function viewProduct(id){
    alert(id);
}



productsContainer.innerHTML = createProductCards()
