const btn = document.querySelector('#buy-btn');
const productContainer = document.querySelector('#products-container')

console.log(productContainer)

const products = [
    {id:1, name:'p1', price:0},
    {id:2, name:'p2', price:0},
    {id:3,name:'p3', price:0},
    {id:4, name:'p4', price:0},
]

function createProductCards(){
    let html = '';
    products.forEach(p =>{
        html += `
            <div class="product-card" onclick="addToCart(${p.id})">
                <img src="" alt="">
                <p>${p.name}</p>
                <strong>${p.price}$</strong>
            </div>
        `
    })
    return html;
}

function addToCart(id){
    alert(id)
}

productContainer.innerHTML=createProductCards();


function clickBtn(){
    alert('holaa')
} 