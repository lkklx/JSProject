import { Flower } from "../Other/";

export class Cart extends Flower {
    #products = [];
    #events = {};
    loadCart() {
        TODO
    }
    on(eventName, listener) {
        if(!this.#events.hasOwnProperty(eventName)){
            this.#events[eventName] = [listener];
        }
        else{
            this.#events[eventName].push(listener)
        }
    }

    addFlowerToCart(flower) {
        const flowerIndex = this.#products.findIndex(f => f.id === flower.id);
        if (flowerIndex === -1) {
            this.#products.push(flower);
            console.log("Hi");
        }
        else {
            this.#products[flowerIndex].quantity += 1;
            console.log("Hello");
        }
        this.#events.add.forEach(listener => listener(this.renderSmallCart));
    }
    get quantityInCart() {
        console.log(this.#products.reduce((count, p) => p.quantity + count, 0));
        return this.#products.reduce((count, p) => p.quantity + count, 0);

    }
    get totalPrice() {
        return this.#products.reduce((price, p) => price + p.quantity * p.price, 0)
    }
    get renderSmallCart() {
        return `<stong> Cart: </strong>(${this.totalPrice} UAH, ${this.quantityInCart} qt) `;
    }
}