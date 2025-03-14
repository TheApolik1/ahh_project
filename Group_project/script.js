let sidebar_main = document.querySelector('.sidebar_main');
let sidebar_sneakers = document.querySelector('.sidebar_sneakers');
let sidebar_tshirts = document.querySelector('.sidebar_tshirts');
let sidebar_trainers = document.querySelector('.sidebar_trainers');
let sidebar_sweater = document.querySelector('.sidebar_sweater');
let sneakers = document.querySelector('.sneakers_container');
let t_shirts = document.querySelector('.t_shirts');
let pants = document.querySelector('.pants');
let sweaters = document.querySelector('.sweaters');

sidebar_sneakers.addEventListener('click', () => {
    sneakers.scrollIntoView({ behavior: 'smooth' });
});

sidebar_tshirts.addEventListener('click', () => {
    t_shirts.scrollIntoView({ behavior: 'smooth' });
});

sidebar_trainers.addEventListener('click', () => {
    pants.scrollIntoView({ behavior: 'smooth' });
});

sidebar_sweater.addEventListener('click', () => {
    sweaters.scrollIntoView({ behavior: "smooth" });
});

sidebar_main.addEventListener('click', () => {
    document.querySelector('.head_of_main').scrollIntoView({ behavior: 'smooth' });
});

let price = [5999, 5890, 3399, 4290, 990, 1799, 1399, 699, 1490, 2599, 1999, 1599, 1990, 2599, 1999, 1999];
let check = new Array(price.length).fill(0);

let product_name = [
    "New Balance 530", 
    "Nike Air Monarch Iv", 
    "Adidas Campus", 
    "Puma X-Ray 2 Square", 
    "Puma ESS 2", 
    "Adidas Future Icons", 
    "Nike Sportswear Club Tee", 
    "New Balance Sport Core Invitational", 
    "Puma Iconic T7 Men's Track", 
    "Nike M NK Swoosh FLC PANT", 
    "New Balance Sport Essentials Fleece", 
    "Adidas Adicolor Classics 3-Stripes", 
    "Puma Essentials+ Crew FL", 
    "Nike Sportswear Club Fleece", 
    "New Balance Essentials Stacked Logo", 
    "Adidas Essentials 3-Stripes"
];

let product_images = [
    "./src/new_balance.jpg",
    "./src/nike_air_monacrch.jpeg",
    "./src/adidas.jpg",
    "./src/puma.jpeg",
    "./src/puma_t_shirt.jpg",
    "./src/adidas_t_shirt.jpeg",
    "./src/nike_t_shirt.jpg",
    "./src/new_balance_t_shirt.jpg",
    "./src/puma_pants.avif",
    "./src/nike_pants.jpeg",
    "./src/new_balance_pants.jpg",
    "./src/adidas_pants.jpeg",
    "./src/puma_sweater.avif",
    "./src/nike_sweater.jpg",
    "./src/new_balance_sweater.jpg",
    "./src/adidas_sweater.jpeg"
];

let cart = document.querySelectorAll('.cart_button');
let price_sum = 0;
let sum = 0;
let cart_count = document.querySelector('.cart_count');
let cart_items = [];
let cart_popup = document.querySelector('.cart_interface'); 

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener('click', () => {
        if (check[i] === 0) {
            check[i] = 1;
            cart[i].innerHTML = 'Прибрати з кошика';
            sum++;
            price_sum += price[i];
            cart_items.push(new Product_cart(product_name[i], price[i], product_images[i]));
        } else {
            check[i] = 0;
            cart[i].innerHTML = 'У кошик';
            sum--;
            price_sum -= price[i];
            cart_items = cart_items.filter(item => item.product_name !== product_name[i]);
        }

        cart_count.innerHTML = sum;
        renderCartPopup();
    });
}

class Product_cart {
    constructor(product_name, price, product_images) {
        this.product_images = product_images;
        this.product_name = product_name;
        this.price = price;
    }
    toCart() {
        return `
        <div class="product_cart">
            <img class="incart_img" src="${this.product_images}" alt="${this.product_name}">
            <div class="product_cart_info">
                <p>${this.product_name}</p>
                <p>${this.price} грн</p>
            </div>
        </div>
        `;
    }
}

function renderCartPopup() {
    if (cart_popup) {
        if (cart_items.length > 0) {
            cart_popup.innerHTML = `
                <h3>Ваш кошик</h3>
                ${cart_items.map(item => item.toCart()).join('')}
                <p><strong>Загальна сума: ${price_sum} грн</strong></p>
            `;
        } else {
            cart_popup.innerHTML = "<p>Кошик порожній</p>";
        }
    }
}

let cart_icon = document.querySelector(".cart_image");
let checking = 0

cart_icon.addEventListener('click', () => {
    if (checking == 0){
    cart_popup.style.display = "block";
    checking = 1;
    }
    else {
    cart_popup.style.display = "none";
    checking = 0;
    }
});
