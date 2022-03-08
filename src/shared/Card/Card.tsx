//@ts-ignore
import plusImg from '../../img/plus-icon.svg';
//@ts-ignore
import pizzaImg from '../../img/pizza/pizza-1.png';

import './Card.css';

function Card() {
    return (
        <div className="card">
            <img className="card__img" src={pizzaImg} alt="Пица" />
            <div className="card__content-wrap">
                <h3 className="card__name">
                    Чизбургер-пицца
                </h3>
                <div className="card__options-wrap">
                    <ul className="card__options">
                        <li className="card__options-top-item card__option-active">
                            Тонкое
                        </li>
                        <li className="card__options-top-item">
                            Традиционное
                        </li>
                    </ul>
                    <ul className="card__options">
                        <li className="card__options-bottom-item card__option-active">
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
