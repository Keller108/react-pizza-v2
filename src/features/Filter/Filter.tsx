//@ts-ignore
import triangleIcon from '../../img/triangle-icon.svg';
import { FilterStore } from './store/FilterStore';
import './Filter.css';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

export interface IFilter {
    filterStore: FilterStore
}

export const Filter = observer(({
    filterStore
    }: IFilter) => {

    const { sortIsOpen } = filterStore;

    const handleDropdownOpen = () => {
        filterStore.openDropdownSort();
    }

    return (
        <div className="filter">
            <ul className="filter__box">
                <li className="filter__box-item filter__box-item_active">
                    Все
                </li>
                <li className="filter__box-item">
                    Вегетарианские
                </li>
                <li className="filter__box-item">
                    Гриль
                </li>
                <li className="filter__box-item">
                    Острые
                </li>
                <li className="filter__box-item">
                    Закрытые
                </li>
            </ul>
            <div className="filter__dropdown">
                <img className="filter__triangle-icon" src={triangleIcon} alt="Иконка фильтра"/>
                Сортировка по:&nbsp;<span onClick={handleDropdownOpen} className="filter__picked-item transparent-link">популярности</span>
                {
                    sortIsOpen && <ul className="dropdown-sort">
                                    <li className='dropdown-sort__item dropdown-sort__item_active'>
                                        популярности
                                    </li>
                                    <li className='dropdown-sort__item'>
                                        цене
                                    </li>
                                    <li className='dropdown-sort__item'>
                                        алфавиту
                                    </li>
                                </ul>
                }
            </div>
        </div>
    );
});
