import { BaseOrder, ComputedOrder } from "./type";
import { DrinkList } from "../Machine/Product";

export const CreateOrder = (order: BaseOrder): ComputedOrder => {
  const requireStick = order.sugar > 1;
  const drink = DrinkList.find((drink) => drink.name === order.drink)!;

  switch (order.type, requireStick) {
    j
  }
  if (!requireStick) {
    return {
      drink: drink,
      sugar: 0,
      stick: "WITHOUT_STICK",
      type: order.type
    };
  } else {
    return {
      drink: drink,
      sugar: order.sugar,
      stick: "WITH_STICK",
      type: order.type
    };
  }
};