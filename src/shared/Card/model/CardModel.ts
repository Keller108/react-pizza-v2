interface ICardProps {
    img: any;
    title: string;
    minPrice: number;
}

export class CardModel {
    img: any;
    title: string;
    minPrice: number;

    constructor(img: any, title: string, minPrice: number) {
        this.img = img;
        this.title = title;
        this.minPrice = minPrice;
    }
}