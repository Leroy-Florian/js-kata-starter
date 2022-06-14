import { drink } from "../Serving";

export type Report = Record<drink, enhancedDrink>

type enhancedDrink = {
  sold: number,
  earned: number,
}
