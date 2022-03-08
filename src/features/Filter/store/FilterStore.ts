import { observable, makeObservable, action } from 'mobx';

export class FilterStore {
    globalFilter: string;
    sortValue: string;

    constructor() {
        this.globalFilter = 'Все';
        this.sortValue = 'популярности';

        makeObservable(this, {
            globalFilter: observable,
            sortValue: observable,

            setGlobalFilter: action,
            setSortValue: action,
        })
    }

    setGlobalFilter(option: string) {
        this.globalFilter = option;
    }

    setSortValue(value: string) {
        this.sortValue = value;
    }
}