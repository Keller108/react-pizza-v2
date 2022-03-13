import { createContext } from "react";
import { CartProcess } from "./CartProcess";

export const CartContext = createContext(new CartProcess());