// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { BaseOrder, ComputedOrder } from "./Order/type";
import { Chocolate, Coffee, Orange, Tea } from "./Machine/Product";
import { HandleOrder, machine } from "./Machine/Machine";
import { CreateOrder } from "./Order/Order";
import { Money } from "./Payment/type";
import { payement } from "./Payment/Payment";

expect.extend(matchers);

it("Drink maker makes 1 tea with 1 sugar and a stick", function() {
  const Input: ComputedOrder = {
    drink: "Tea",
    sugar: 1,
    stick: "WITH_STICK",
    type: "hot"
  };
  expect(HandleOrder(Input)).toEqual("T:1:0");
});
it("Drink maker makes 1 tea with 1 sugar and a stick", function() {
  const Input: ComputedOrder = {
    drink: "Orange",
    sugar: 0,
    stick: "WITHOUT_STICK",
    type: "cold"
  };
  expect(HandleOrder(Input)).toEqual("O::");
});

it("Drink maker makes 1 chocolate with no sugar - and therefore no stick", function() {
  const Input: ComputedOrder = {
    drink: "Chocolate",
    sugar: 0,
    stick: "WITHOUT_STICK",
    type: "hot"
  };
  expect(HandleOrder(Input)).toEqual("H::");
});

it("Drink maker makes 1 coffee with 2 sugars and a stick", function() {
  const Input: ComputedOrder = {
    drink: "Coffee",
    sugar: 2,
    stick: "WITH_STICK",
    type: "hot"
  };
  expect(HandleOrder(Input)).toEqual("C:2:0");
});

it("Create an order with coffee and sugar", function() {
  const Given: BaseOrder = {
    drink: "Coffee",
    sugar: 2,
    type: "hot"
  };
  const expected: ComputedOrder = {
    drink: "Coffee",
    sugar: 2,
    stick: "WITH_STICK",
    type: "hot"
  };

  expect(CreateOrder(Given)).toEqual(expected);
});

it("Create an order with coffee and no sugar", function() {
  const Given: BaseOrder = {
    drink: "Coffee",
    sugar: 0,
    type: "hot"

  };
  const expected: ComputedOrder = {
    drink: "Coffee",
    sugar: 0,
    stick: "WITHOUT_STICK",
    type: "hot"
  };

  expect(CreateOrder(Given)).toEqual(expected);
});

it("Pay enough for a coffee", function() {
  const Given: BaseOrder = {
    drink: "Coffee",
    sugar: 0,
    type: "hot"
  };
  const amount = 700

  const expected : Money = {
    amount: 100,
    currency: "EUR_cts"
  }
  expect(payement(Given,amount)).toEqual(expected);
});

it("Pay enough for a TEA", function() {
  const Given: BaseOrder = {
    drink: "Tea",
    sugar: 0,
    type: "hot"
  };
  const amount = 700
  const expected : Money = {
    amount: 300,
    currency: "EUR_cts"
  }

  expect(payement(Given,amount)).toEqual(expected);
});

it("Pay not enough for a Tea", function() {
  const Given: BaseOrder = {
    drink: "Tea",
    sugar: 0,
    type: "hot"
  };
  const amount = 300
  const expected : Money = {
    amount: -100,
    currency: "EUR_cts"
  }

  expect(payement(Given,amount)).toEqual(expected);
});

it("machine get a make Tea instruction", function() {
  const Given: BaseOrder = {
    drink: "Tea",
    sugar: 0,
    type: "hot"
  };
  const amount = 300

  expect(machine(Given,amount)).toEqual("T::");
});



