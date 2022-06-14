import { actionType } from "./Actions";
import { Money, drink } from "../../Serving";

export type Action =
  { type: actionType.BUY_DRINK, payload: { drink: drink, price: Money } } |
  { type: actionType.RESET_REPORT }


