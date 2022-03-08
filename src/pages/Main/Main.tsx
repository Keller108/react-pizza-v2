import { useContext } from 'react';
import { Filter } from '../../features/Filter/Filter';
import Card from '../../shared/Card/Card';
import { FilterContext } from '../../processes/filterProcess';
import './Main.css';

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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </ul>
        </main>
    );
};
