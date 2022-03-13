import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import './Card.css';
//@ts-ignore
import plusImg from '../../img/plus-icon.svg';
import { CardStore } from './store/CardStore';
import { CartStore } from '../../pages/Cart/store/CartStore';

interface ICardProps {
    img: any;
    title: string;
    minPrice: number;
    cartStore: CartStore;
}

const Card = observer(({img, title, minPrice, cartStore}:ICardProps) => {
    const store = new CardStore();

    const [isDough, setIsDough] = useState(store.dough);
    const [pizzaSize, setPizzaSize] = useState(store.size);
    const [pizzaQuantity, setPizzaQuantity] = useState(store.count);

    const setDough = (e: any) => {
        setIsDough(e.target.textContent);
    };

    const setSize = (e: any) => {
        setPizzaSize(e.target.textContent);
    };

    const addOneToCart = () => {
        setPizzaQuantity(pizzaQuantity + 1);
        cartStore.addToCart({ img, title, minPrice });
        cartStore.refreshTotal(minPrice);
    };

    useEffect(() => {
        store.setDoughSize(isDough);
    }, [isDough]);

    useEffect(() => {
        store.setSize(pizzaSize);
    }, [pizzaSize]);

    useEffect(() => {
        store.addOne(pizzaQuantity);
    }, [pizzaQuantity]);

    return (
        <div className="card">
            <img className="card__img" src={img} alt={title} />
            <div className="card__content-wrap">
                <h3 className="card__name">
                    {title}
                </h3>
                <div className="card__options-wrap">
                    <ul className="card__options">
                        <li
                            onClick={setDough}
                            className={isDough === 'Тонкое'
                            ? 'card__options-top-item card__option-active'
                                : 'card__options-top-item'}>
                            Тонкое
                        </li>
                        <li
                            onClick={setDough}
                            className={isDough === 'Традиционное'
                                ? 'card__options-top-item card__option-active'
                                    : 'card__options-top-item'}>
                                Традиционное
                        </li>
                    </ul>
                    <ul className="card__options">
                        <li onClick={setSize} className={pizzaSize === '26 см.'
                                ? 'card__options-bottom-item card__option-active'
                                    : 'card__options-bottom-item'}>
                            26 см.
                        </li>
                        <li onClick={setSize} className={pizzaSize === '30 см.'
                                ? 'card__options-bottom-item card__option-active'
                                    : 'card__options-bottom-item'}>
                            30 см.
                        </li>
                        <li onClick={setSize} className={pizzaSize === '40 см.'
                                ? 'card__options-bottom-item card__option-active'
                                    : 'card__options-bottom-item'}>
                            40 см.
                        </li>
                    </ul>
                </div>
                <div className="card__price-wrap">
                    <p className="card__price">
                        от {minPrice} ₽
                    </p>
                    <button onClick={addOneToCart} className="card__price-add-btn">
                        <img
                            className="card__price-add-btn-plus-img"
                            src={plusImg} alt="Добавить в корзину"
                        />
                        Добавить
                        <span className="card__price-add-btn-amount">
                            {pizzaQuantity}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Card;
