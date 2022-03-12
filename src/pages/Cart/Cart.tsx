import { CartItem } from '../../entities/CartItem/CartItem';
import './Cart.css';

export function Cart() {
    return (
        <main className="cart">
            <div className="cart__title-container">
                <h1 className="cart__title">
                    Корзина
                </h1>
                <button className="cart__empty-cart-btn" type="button">
                    Очистить корзину
                </button>
            </div>
            <ul className="cart__item-container">
                <CartItem />
            </ul>
        </main>
    )
}