import { useContext } from 'react';
import { Filter } from '../../features/Filter/Filter';
import Card from '../../shared/Card/Card';
import { FilterContext } from '../../processes/FilterProcess';
import './Main.css';
import { cardsList } from '../../shared/Card/const/cardsList';

export function Main() {
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
                {cardsList.map(item => <Card key={item.title} img={item.img} title={item.title} minPrice={item.minPrice} />)}
            </ul>
        </main>
    );
};
