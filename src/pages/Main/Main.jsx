import Filter from '../../features/Filter/Filter';
import Card from '../../shared/Card/Card';
import './Main.css';

function Main() {
    return (
        <main className="main">
            <Filter />
            <h1 className="main__title">
                Все пиццы
            </h1>
            <ul className="main__cards-list">
                <Card />
            </ul>
        </main>
    );
}

export default Main;
