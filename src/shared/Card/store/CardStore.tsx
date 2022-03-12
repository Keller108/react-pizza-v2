import { makeObservable, action, observable } from "mobx";

export class CardStore {
    dough: string;
    size: number;
    count: number;

    constructor() {
        this.dough = 'Тонкое';
        this.size = 26;
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

    setSize(size: number) {
        this.size = size;
    }

    addOne() {
        this.count = this.count + 1;
    }
}