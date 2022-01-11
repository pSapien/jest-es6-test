// just to make sure doing this works with jest
import { createOperation } from "./createOperation.js";

export const add = createOperation((acc, cur) => acc + cur);
export const multiply = createOperation((acc, cur) => acc * cur, 1);
