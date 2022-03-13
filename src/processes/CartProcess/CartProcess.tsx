import { CartStore } from "../../pages/Cart/store/CartStore"

export class CartProcess {
    cartStore: CartStore;
    constructor() {
        this.cartStore = new CartStore();
    }
}