import { Money } from "./Payment/type";
import { drink } from "./Order/type";

export type codeListOutput = "C" | "H" | "T" | "M" | "O";

export type DrinkInformation = {
  name: drink
  output : codeListOutput
  price: Money
}







