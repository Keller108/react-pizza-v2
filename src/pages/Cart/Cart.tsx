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
            <div className="cart__total-wrapper">
                <p>Всего пицц: <span className="cart__total-amount">3 шт.</span></p>
                <p>Сумма заказа: <span className="cart__total-price">900 ₽</span></p>
            </div>
            <ul className="cart__action-container">
                <li className="cart__action-item">
                    <button className="cart__action-btn cart__go-back-btn">Вернуться назад</button>
                </li>
                <li className="cart__action-item">
                    <button className="cart__action-btn cart__purchase-btn">Оплатить сейчас</button>
                </li>
            </ul>
        </main>
    )
}