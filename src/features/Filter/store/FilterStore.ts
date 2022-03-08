import { observable, makeObservable, action } from 'mobx';

export class FilterStore {
    sortIsOpen: boolean;
    sortValue: string;

    constructor() {
        this.sortIsOpen = false;
        this.sortValue = 'популярности';

        makeObservable(this, {
            sortIsOpen: observable,
            sortValue: observable,

            openDropdownSort: action,
            setSortValue: action,
        })
    }

    openDropdownSort() {
        this.sortIsOpen = !this.sortIsOpen;
    }

    setSortValue(value: string) {
        this.sortValue = value;
    }
}