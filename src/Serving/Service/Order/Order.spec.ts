import { BaseOrder, ComputedOrder } from "./type";
import { OrderService } from "./Order";

const { createOrder } = OrderService;

it("Create an order with coffee and sugar", function() {
  const Given: BaseOrder = {
    drink: "Coffee",
    sugar: 2,
    type: "HOT"
  };

  const actual: ComputedOrder = createOrder(Given);

  const expected: ComputedOrder = {
    drink: "Coffee",
    sugar: 2,
    stick: "WITH_STICK",
    type: "HOT"
  };

  expect(actual).toEqual(expected);
});

it("Create an order with coffee and no sugar", function() {
  const Given: BaseOrder = {
    drink: "Coffee",
    sugar: 0,
    type: "HOT"

  };
  const expected: ComputedOrder = {
    drink: "Coffee",
    sugar: 0,
    stick: "WITHOUT_STICK",
    type: "HOT"
  };

  expect(createOrder(Given)).toEqual(expected);
});



