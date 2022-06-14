import { drink } from "../Order";

export interface IStock {
  beverageQuantityChecker(drink: drink): Promise<boolean>;
  notifyMissingDrink(drink: drink): Promise<void>;
}
