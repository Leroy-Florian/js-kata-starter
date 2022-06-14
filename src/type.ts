import { Money,drink } from "./Serving";


export type codeListOutput = "C" | "H" | "T" | "M" | "O";

export type DrinkInformation = {
  name: drink
  output : codeListOutput
  price: Money
}







