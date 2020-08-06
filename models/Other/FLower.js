export class Flower {
    constructor(title, price, image) {
        this.quantity = 1;
        this.title = title;
        this.price = price;
        this.image = image;
        this.id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    }
    get renderFlo() {
        return`
        <section class="product-item">
                <img src = '${this.image}' alt='${this.title}'></img>
                    <h1 class="product-title">${this.title}</h1>
                    <div class="product-info">
                        <span>
                            <strong>
                                ${this.price} UAH
                            </strong>
                        </span>
                        <span>
                            <button class="buy-btn" data-id='${this.id}'>BUY</button>
                        </span>
                    </div>
            </section>
        `
    }
}
