import { Link } from 'react-router-dom';
import './EmptyCart.css';
//@ts-ignore
import imgPath from '../../../../img/img-empty-basket.svg';

export function EmptyCart() {
    return (
        <main className="empty-cart">
            <h1 className="empty-cart__title">
                Корзина пустая
            </h1>
            <p className="empty-cart__description">
                Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img className="empty-cart__content-img" src={imgPath} alt="Empty cart"/>
            <Link className="empty-cart__go-back-btn" to="/" onClick={() => 1} type="button">
                Вернуться назад
            </Link>
        </main>
    )
}