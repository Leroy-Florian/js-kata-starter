import { BaseOrder } from "../Order";
import { Money } from "./type";
import { PaymentService } from "./Payment";

const {
  handleBalance,
} = PaymentService;


it("Pay enough for a coffee", function() {
  const Given: BaseOrder = {
    drink: "Coffee",
    sugar: 0,
    type: "HOT"
  };
  const amount = 700;

  const expected: Money = {
    amount: 100,
    currency: "EUR_PENNY"
  };
  expect(handleBalance(Given, amount)).toEqual(expected);
});

it("Pay enough for a TEA", function() {
  const Given: BaseOrder = {
    drink: "Tea",
    sugar: 0,
    type: "HOT"
  };
  const amount = 700;
  const expected: Money = {
    amount: 300,
    currency: "EUR_PENNY"
  };

  expect(handleBalance(Given, amount)).toEqual(expected);
});

it("Pay not enough for a Tea", function() {
  const Given: BaseOrder = {
    drink: "Tea",
    sugar: 0,
    type: "HOT"
  };
  const amount = 300;
  const expected: Money = {
    amount: -100,
    currency: "EUR_PENNY"
  };

  expect(handleBalance(Given, amount)).toEqual(expected);
});
