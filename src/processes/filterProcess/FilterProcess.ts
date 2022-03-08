import { FilterStore } from "../../features/Filter/store/FilterStore";

export class FilterProcess {
    filterStore: FilterStore;

    constructor() {
        this.filterStore = new FilterStore();
    }
}