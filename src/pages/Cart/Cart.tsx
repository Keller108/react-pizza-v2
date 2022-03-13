import { Link } from 'react-router-dom';
import { CartItem } from '../../entities/CartItem/CartItem';
import './Cart.css';

export function Cart({cartStore}: any) {
    const emptyCart = () => {
        cartStore.clearCart();
    };

    return (
        <main className="cart">
            <div className="cart__title-container">
                <h1 className="cart__title">
                    Корзина
                </h1>
                <button onClick={emptyCart} className="cart__empty-cart-btn" type="button">
                    Очистить корзину
                </button>
            </div>
            <ul className="cart__item-container">
                {cartStore.cart.length > 0 ? cartStore.cart.map(
                    //@ts-ignore
                    item => <CartItem key={item.title} img={item.img} title={item.title} price={item.minPrice} />)
                    : 'Корзина пустая'
                }
            </ul>
            <div className="cart__total-wrapper">
                <p>Всего пицц: <span className="cart__total-amount">3 шт.</span></p>
                <p>Сумма заказа: <span className="cart__total-price">900 ₽</span></p>
            </div>
            <ul className="cart__action-container">
                <li className="cart__action-item">
                    <Link to="/" className="cart__action-btn cart__go-back-btn">Вернуться назад</Link>
                </li>
                <li className="cart__action-item">
                    <button className="cart__action-btn cart__purchase-btn">Оплатить сейчас</button>
                </li>
            </ul>
        </main>
    )
}