import { observable, makeObservable, action } from 'mobx';

export class FilterStore {
    constructor() {
        this.sortIsOpen = false;

        makeObservable(this, {
            sortIsOpen: observable,
            openDropdownSort: action,
        })
    }

    openDropdownSort() {
        this.sortIsOpen = !this.sortIsOpen;
    }
}