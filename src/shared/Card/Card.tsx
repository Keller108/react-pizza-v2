import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
//@ts-ignore
import plusImg from '../../img/plus-icon.svg';
import './Card.css';
import { CardStore } from './store/CardStore';

const store = new CardStore();

interface ICardProps {
    img: any;
    title: string;
    minPrice: number;
}

const Card = observer(({img, title, minPrice}:ICardProps) => {
    const [isDough, setIsDough] = useState(store.dough);

    const setDough = (e: any) => {
        // setIsDough('Тонкое');
        store.setDoughSize(e.target.textContent);
    };

    const setTraditionalDough = () => {
        setIsDough('Традиционное');
    };

    useEffect(() => {
        // store.setDoughSize(isDough);
        console.log(store.dough);
    }, [store.dough])

    let doughStyle = store.dough;

    console.log(doughStyle);
    return (
        <div className="card">
            <img className="card__img" src={img} alt={title} />
            <div className="card__content-wrap">
                <h3 className="card__name">
                    {title}
                </h3>
                <div className="card__options-wrap">
                    <ul className="card__options">
                        <li onClick={setDough} className="card__options-top-item card__option-active">
                            Тонкое
                        </li>
                        <li onClick={setDough} className="card__options-top-item">
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
                        от {minPrice} ₽
                    </p>
                    <button className="card__price-add-btn">
                        <img
                            className="card__price-add-btn-plus-img"
                            src={plusImg} alt="Добавить в корзину"
                        />
                        Добавить
                        <span className="card__price-add-btn-amount">
                            0
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
});

export default Card;
