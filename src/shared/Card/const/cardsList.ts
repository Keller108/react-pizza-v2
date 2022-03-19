import { ProductModel } from "../model/CardModel";
//@ts-ignore
import imgMrg from "../../../img/pizza/pizza-4.png";
//@ts-ignore
import imgChz from "../../../img/pizza/pizza-2.png";
//@ts-ignore
import imgVgt from "../../../img/pizza/pizza-1.png";
//@ts-ignore
import imgMshrm from "../../../img/pizza/pizza-3.png";

const margarita = new ProductModel(imgMrg, 'Пицца «Маргарита»', 320);
const cheesy = new ProductModel(imgChz, 'Пицца «4 сыра»', 460);
const vegeterian = new ProductModel(imgVgt, 'Пицца «Вегетарианская»', 400);
const mushrooms = new ProductModel(imgMshrm, 'Пицца «Грибная»', 420);

export const cardsList = [
    margarita,
    cheesy,
    vegeterian,
    mushrooms
];