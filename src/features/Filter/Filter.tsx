import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
//@ts-ignore
import triangleIcon from '../../img/triangle-icon.svg';
import { FilterStore } from './store/FilterStore';
import { globalFilterValues, sortFilterValues } from './const/variables';
import './Filter.css';

export interface IFilter {
    filterStore: FilterStore
}

export const Filter = observer(({
    filterStore
    }: IFilter) => {

    const { sortValue, globalFilter } = filterStore;

    const [globalFilterValue, setGlobalFilterValue] = useState(globalFilter);
    const [sortIsOpen, setSortIsOpen] = useState(false);
    const [sortStateValue, setSortStateValue] = useState(sortValue);

    const handleDropdownOpen = () => {
        setSortIsOpen(!sortIsOpen);
    };

    const pickGlobalValue = (e: any) => {
        setGlobalFilterValue(e.target.textContent);
    }

    const pickSortValue = (e: any) => {
        setSortStateValue(e.target.textContent);
        closeSortDropDown();
    };

    const closeSortDropDown = () => {
        setSortIsOpen(false);
    };

    useEffect(() => {
        filterStore.setGlobalFilter(globalFilterValue);
    }, [globalFilterValue]);

    useEffect(() => {
        filterStore.setSortValue(sortStateValue);
    }, [sortStateValue]);

    return (
        <div className="filter">
            <ul className="filter__box">{
                    globalFilterValues.map((item) => <li
                        className={item.value === globalFilter
                            ? 'filter__box-item filter__box-item_active'
                                : 'filter__box-item'}
                        onClick={pickGlobalValue}
                        key={item.value}
                    >{
                        item.value}
                    </li>
                )}
            </ul>
            <div className="filter__dropdown">
                <img className="filter__triangle-icon" src={triangleIcon} alt="Иконка фильтра"/>
                Сортировка&nbsp;по:&nbsp;<span onClick={handleDropdownOpen} className="filter__picked-item transparent-link">{sortValue}</span>
                {
                    sortIsOpen && <ul className="dropdown-sort">
                        {sortFilterValues.map((item) => <li
                                            onClick={pickSortValue}
                                            className={sortValue === item.value ?
                                                'dropdown-sort__item dropdown-sort__item_active'
                                                    : 'dropdown-sort__item'}
                                            key={item.value}
                                        >
                                            {item.value}
                                        </li>
                                    )}
                                </ul>
                }
            </div>
        </div>
    );
});
