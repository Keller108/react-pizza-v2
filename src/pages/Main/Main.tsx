import { useContext } from 'react';
import { Filter } from '../../features/Filter/Filter';
import Card from '../../shared/Card/Card';
import { FilterContext } from '../../processes/FilterProcess';
import './Main.css';
import { cardsList } from '../../shared/Card/const/cardsList';
import { CartContext } from '../../processes/CartProcess';

export function Main({ cartStore }: any) {
    const { filterStore } = useContext(FilterContext);

    return (
        <main className="main">
            <Filter
                filterStore={filterStore}
            />
            <h1 className="main__title">
                Все пиццы
            </h1>
            <ul className="main__cards-list">
                {cardsList.map(item => <Card key={item.title}
                        img={item.img}
                        title={item.title}
                        minPrice={item.minPrice}
                        cartStore={cartStore}
                    />)}
            </ul>
        </main>
    );
};
