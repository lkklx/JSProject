'use strict';
import { Catalog } from "./models/Shop";
import { Cart } from "./models/Shop"

//containers
const productsContainer = document.querySelector('.product-container');
const smallCartContainer = document.querySelector('.small-cart');
//conteiners

//main
const cart = new Cart();
const catalog = new Catalog();
catalog.loadProducts();
productsContainer.innerHTML = catalog.productsRender;
smallCartContainer.innerHTML = cart.renderSmallCart;

//main

//events
cart.on('add', (html) => {
    console.log('test 1')
    smallCartContainer.innerHTML = html
})
cart.on('del', () => {
    
})
cart.on('qch', () => {
    
})

productsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('buy-btn')){
        const productId = e.target.getAttribute('data-id')
        const flower = catalog.getProductById(productId);
        console.log(flower);
        cart.addFlowerToCart(flower);
        console.log(cart.totalPrice);
    }
})
//events 