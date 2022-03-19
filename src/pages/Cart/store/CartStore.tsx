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
        })
    }

    repetitionCheck(obj: {}) {
        if (this.cart) {
            let isRepeat = false;
            this.cart.find(
                //@ts-ignore
                item => item.keys[0])
        }
    }

    addToCart({img, title, minPrice}: {img: any, title: string, minPrice: number}) {
        let object = {img, title, minPrice};
        this.cart.push(object);
    }

    refreshTotal(sum: number) {
        this.total = this.total + sum;
    }

    clearCart() {
        this.cart = [];
        this.total = 0;
    }
}