
// Save cart items to local storage when necessary
const shoppingCart = JSON.parse(localStorage.getItem('cart')) || [];
function saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cart));
}
// Your array of products
class Shop {
    constructor(shoppingCart) {
        this.cart = shoppingCart;
    }
    // This is to get the sub total for the cart.
    obtainSubTotal() {
        if (this.cart.length > 0) {
            return this.cart.reduce((acc, item) => acc + item.price, 0);
        }
        return 0;
    }
}
// Define variables at the beginning and use them in the code
const title = document.querySelector("h1.text-center.text-uppercase.bold.mt-20px.fw-bold.bg-success#title");
const slogan = document.querySelector("h2.subtitle.text-uppercase.bold.text-success#slogan");
const cart2 = document.querySelector("p.text-uppercase.bold#cart2");
const card = document.querySelector("card");


function restoreLS() {
    if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
    } else {
        return [];
    }
}

// Call the function and use the returned cart object
const restoredCart = restoreLS();
console.log(restoredCart);


const cart = restoreLS();
// These are the items to be sold
const items = [
    { images: "images/images.jpeg", code: "00666", name: "Corn", price: 100 },
    { images: "images/images (3).jpeg", code: "00211", name: "Ginger", price: 50 },
    { images: "images/images (2).jpeg", code: "00431", name: "Leaf Lettuce", price: 100 },
    { images: "images/images (1).jpeg", code: "00422", name: "Sweet Potatoes", price: 150 },
    { images: "images/descarga.jpeg", code: "00423", name: "Cucumber", price: 120 },
    { images: "images/descarga (8).jpeg", code: "00424", name: "Artichoke", price: 100 },
    { images: "images/descarga (7).jpeg", code: "00425", name: "Avocado", price: 90 },
    { images: "images/descarga (6).jpeg", code: "00426", name: "Red Bell Pepper", price: 100 },
    { images: "images/descarga (5).jpeg", code: "00427", name: "Brocoli", price: 100 },
    { images: "images/descarga (4).jpeg", code: "00421", name: "Pumpkin", price: 10 },
    { images: "images/descarga (3).jpeg", code: "00420", name: "Green Bell Pepper", price: 120 },
    { images: "images/descarga (2).jpeg", code: "00429", name: "Tomatoes", price: 150 },
    { images: "images/asparagus.jpeg", code: "00458", name: "Asparagus", price: 100 },
    { images: "images/carrot.jpeg", code: "00468", name: "Carrot", price: 100 },
    { images: "images/garlic.jpeg", code: "00478", name: "Garlic", price: 100 },
    { images: "images/potatoes.jpeg", code: "00218", name: "Potatoes", price: 100 },
    { images: "images/spinash.jpeg", code: "00528", name: "Spinach", price: 100 },
    { images: "images/yellow-onion.jpeg", code: "00828", name: "Yellow Onions", price: 100 },
];
const container = document.querySelector("div.container#container");
function returnCardHTML(products) {
    const productImages = products.images ? products.images : ""; // Check if images property is defined
    return ` <div class="card col-3 fluid mb-5" style="width: 13rem;" id="card">
            <img src="${products.images}" class="card-img-top img-fluid img-thumbnail mt-3" alt="...">
            <div class="card-body">
                <div class="name"><p class="card-title">${products.name}</p></div>
                <div class="price"><p class="card-text">$ ${products.price}</p></div>
                <div class="buy mb-2 mt-3">
                <button class="btn btn-primary" id="${products.code}">Add to Cart</button>
            </div>
        </div>`;
}



function activateAllButtonsClick() {
    const buttons = document.querySelectorAll("button.btn.btn-primary");
    for (let button of buttons) {
        button.addEventListener("click", (e) => {
            const chosenItems = items.find((product) => product.code === e.target.id);
            cart.push(chosenItems);
            localStorage.setItem("cart", JSON.stringify(cart));
            console.clear();
            saveCartItems();
            alertMessages("The product ${products.name}cart has been successfully");
        });
    }
}



function loadProducts() {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    items.forEach((product) => {
        container.innerHTML += returnCardHTML(product); // Pass the product object to returnCardHTML
    });
    activateAllButtonsClick()
}
loadProducts();


const alertMessages = (message) => { 
    document.querySelector('div.toast#alert');
    divMsg.textContent = message || '';
};



    
























