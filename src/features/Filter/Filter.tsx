import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
//@ts-ignore
import triangleIcon from '../../img/triangle-icon.svg';
import { FilterStore } from './store/FilterStore';
import './Filter.css';

export interface IFilter {
    filterStore: FilterStore
}

export const Filter = observer(({
    filterStore
    }: IFilter) => {

    const { sortIsOpen, sortValue } = filterStore;

    const handleDropdownOpen = () => {
        filterStore.openDropdownSort();
    };

    const [sortStateValue, setSortStateValue] = useState(sortValue);

    const pickSortValue = (e: any) => {
        setSortStateValue(e.target.innerText)
        console.log(e.target.innerText);
    };

    useEffect(() => {
        filterStore.setSortValue(sortStateValue);
    }, [sortStateValue]);

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
                Сортировка&nbsp;по:&nbsp;<span onClick={handleDropdownOpen} className="filter__picked-item transparent-link">{sortValue}</span>
                {
                    sortIsOpen && <ul className="dropdown-sort">
                                    <li
                                        onClick={pickSortValue}
                                        className={sortValue === 'популярности' ?
                                            'dropdown-sort__item dropdown-sort__item_active'
                                                : 'dropdown-sort__item'}
                                    >
                                        популярности
                                    </li>
                                    <li
                                        onClick={pickSortValue}
                                        className={sortValue === 'цене' ?
                                        'dropdown-sort__item dropdown-sort__item_active'
                                            : 'dropdown-sort__item'}
                                    >
                                        цене
                                    </li>
                                    <li
                                        onClick={pickSortValue}
                                        className={sortValue === 'алфавиту' ?
                                        'dropdown-sort__item dropdown-sort__item_active'
                                            : 'dropdown-sort__item'}
                                    >
                                        алфавиту
                                    </li>
                                </ul>
                }
            </div>
        </div>
    );
});
