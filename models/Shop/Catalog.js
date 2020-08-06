import { Flower } from "../Other";
export class Catalog {

    #products = [];

    loadProducts() {
        for (let i = 0; i < 20; i++) {
            const price = Math.round(Math.random() * 150);
            this.#products.push(
                new Flower('Flower' + " " + (i + 1), price, "https://findicons.com/files/icons/1243/hello_kitty/256/flowers.png")
            )
        }

        
    }

    getProductById(id) {
        return this.#products.find(p => p.id === id);
    }

    get productsRender() {
        const htmlt = this.#products.reduce((html, p) => html + p.renderFlo, '');
        return htmlt;
    }
}