import { BaseOrder } from "../Order/type";
import { Money } from "./type";

export const payement = (order: BaseOrder, money: number): Money => {
  const price = order.drink.price;

  const amount = money - price.amount;
  return {
    amount: amount,
    currency: price.currency
  };
};


