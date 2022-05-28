import { createContext } from "react";
import { FilterProcess } from "./FilterProcess";

export const filterContext = createContext(new FilterProcess());