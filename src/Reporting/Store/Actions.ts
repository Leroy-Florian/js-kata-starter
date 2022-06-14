import { Action } from "./type";
import { Money, drink } from "../../Serving";

export enum actionType {
  BUY_DRINK = "BUY_DRINK",
  RESET_REPORT = "RESET_REPORT",
}

export const BuyDrinkAction = (drink: drink, price: Money): Action => ({
  type: actionType.BUY_DRINK,
  payload: {
    drink,
    price
  }
});

export const ResetReport = (): Action => ({
  type: actionType.RESET_REPORT
});
