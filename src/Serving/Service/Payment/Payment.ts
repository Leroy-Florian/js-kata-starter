import { BaseOrder } from "../Order";
import { Money } from "./type";
import { DrinkList } from "../../Constant";

interface IPayment {
  handleBalance(order: BaseOrder, money: number): Money;
  isEnough(Money: Money): boolean;
}

const handleBalance = (order: BaseOrder, money: number): Money => {
  const drink = DrinkList.find((drink) => drink.name === order.drink)!;
  const amount = money - drink.price.amount;

  return {
    amount: amount,
    currency: drink.price.currency
  };
};

const isEnough = (Money: Money) => Money.amount < 0;


export const PaymentService: IPayment = {
  handleBalance,
  isEnough
};
