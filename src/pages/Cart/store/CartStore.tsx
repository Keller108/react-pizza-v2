import { makeObservable, observable, action } from "mobx";

export class CartStore {
    cart: any;
    total: number;
    margarita: number;

    constructor() {
        this.cart = [];
        this.total = 0;

        makeObservable(this, {
            cart: observable,
            total: observable,

            addToCart: action,
            refreshTotal: action,
            clearCart: action,
            removeFromCart: action,
        })
    }

    addToCart({img, title, minPrice, dough, size}: {img: any, title: string, minPrice: number, dough: string, size: string}) {
        let object = {img, title, minPrice, dough, size};
        this.cart.push(object);
    }

    removeFromCart(title: string, price: number) {
        this.cart = this.cart.filter((item: any) => item.title !== title);
        this.total = this.total - price;
    }

    refreshTotal(sum: number) {
        this.total = this.total + sum;
    }

    clearCart() {
        this.cart = [];
        this.total = 0;
    }
}