import { makeObservable, action, observable } from "mobx";

export class CardStore {
    dough: string;
    size: string;
    count: number;

    constructor() {
        this.dough = 'Тонкое';
        this.size = '26 см.';
        this.count = 0;

        makeObservable(this, {
            dough: observable,
            size: observable,
            count: observable,

            setDoughSize: action,
            setSize: action,
            addOne: action,
        })
    }

    setDoughSize(value: string) {
        this.dough = value;
    }

    setSize(size: string) {
        this.size = size;
    }

    addOne(value: number) {
        this.count = value;
    }
}