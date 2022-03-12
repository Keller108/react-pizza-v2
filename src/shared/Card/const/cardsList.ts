import { CardModel } from "../model/CardModel";
//@ts-ignore
import imgMrg from "../../../img/pizza/pizza-4.png";
//@ts-ignore
import imgChz from "../../../img/pizza/pizza-2.png";
//@ts-ignore
import imgVgt from "../../../img/pizza/pizza-1.png";
//@ts-ignore
import imgMshrm from "../../../img/pizza/pizza-3.png";

const margarita = new CardModel(imgMrg, 'Пицца «Маргарита»', 320);
const cheesy = new CardModel(imgChz, 'Пицца «4 сыра»', 460);
const vegeterian = new CardModel(imgVgt, 'Пицца «Вегетарианская»', 400);
const mushrooms = new CardModel(imgMshrm, 'Пицца «Грибная»', 420);

export const cardsList = [
    margarita,
    cheesy,
    vegeterian,
    mushrooms
];