import { BaseOrder, ComputedOrder } from "./type";
import { DrinkList } from "../../Constant";

interface IOrderService {
  createOrder(order: BaseOrder): ComputedOrder;
}

const createOrder = (order: BaseOrder): ComputedOrder => {
  const requireStick = order.sugar > 1;
  const drink = DrinkList.find((drink) => drink.name === order.drink)!;

  if (!requireStick) {
    return <ComputedOrder>{
      drink: drink.name,
      sugar: 0,
      stick: "WITHOUT_STICK",
      type: order.type
    };
  } else {
    return <ComputedOrder>{
      drink: drink.name,
      sugar: order.sugar,
      stick: "WITH_STICK",
      type: order.type
    };
  }
};


export const OrderService : IOrderService = {
  createOrder
}
