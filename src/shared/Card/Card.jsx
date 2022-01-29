import Filter from '../../features/Filter/Filter';
import './Card.css';
import plusImg from '../../img/plus-icon.svg';
import pizzaImg from '../../img/pizza/pizza-1.png';

function Card({ img }) {
    return (
        <div className="card">
            <img className="card__img" src={pizzaImg} alt="Пица" />
            <div className="card__content-wrap">
                <h3 className="card__name">
                    Чизбургер-пицца
                </h3>
                <div className="card__options">
                    <ul className="card__options-top">
                        <li className="card__options-top-item">
                            Тонкое
                        </li>
                        <li className="card__options-top-item">
                            Традиционное
                        </li>
                    </ul>
                    <ul className="card__options-bottom">
                        <li className="card__options-bottom-item">
                            26 см.
                        </li>
                        <li className="card__options-bottom-item">
                            30 см.
                        </li>
                        <li className="card__options-bottom-item">
                            40 см.
                        </li>
                    </ul>
                </div>
                <div className="card__price-wrap">
                    <p className="card__price">
                        от 380 ₽
                    </p>
                    <button className="card__price-add-btn">
                        <img
                            className="card__price-add-btn-plus-img"
                            src={plusImg} alt="Добавить в корзину"
                            ariaLabel="Добавить в корзину"
                        />
                        Добавить
                        <span className="card__price-add-btn-amount">
                            2
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
