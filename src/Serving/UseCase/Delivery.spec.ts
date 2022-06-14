import { Message } from "./type";
import { HandleMessage, HandleMoney, HandleOrder, HandleStock } from "./Delivery";
import { BaseOrder, ComputedOrder } from "../Service";
import { IStock } from "../Service/Stock/Ports";


it("should create a Message", function() {
  const Input: Message = "This is a message";
  expect(HandleMessage(Input)).toEqual("M:This is a message");
});

it("Drink maker makes 1 tea with 1 sugar and a stick", function() {
  const Input: ComputedOrder = {
    drink: "Tea",
    sugar: 1,
    stick: "WITH_STICK",
    type: "HOT"
  };
  expect(HandleOrder(Input)).toEqual("T:1:0");
});
it("Drink maker makes 1 tea with 1 sugar and a stick", function() {
  const Input: ComputedOrder = {
    drink: "Orange",
    sugar: 0,
    stick: "WITHOUT_STICK",
    type: "COLD"
  };
  expect(HandleOrder(Input)).toEqual("O::");
});

it("Drink maker makes 1 chocolate with no sugar - and therefore no stick", function() {
  const Input: ComputedOrder = {
    drink: "Chocolate",
    sugar: 0,
    stick: "WITHOUT_STICK",
    type: "HOT"
  };
  expect(HandleOrder(Input)).toEqual("H::");
});

it("Drink maker makes 1 coffee with 2 sugars and a stick", function() {
  const Input: ComputedOrder = {
    drink: "Coffee",
    sugar: 2,
    stick: "WITH_STICK",
    type: "HOT"
  };
  expect(HandleOrder(Input)).toEqual("C:2:0");
});

it("Drink maker makes 1 extraHot chocolate with no sugar - and therefore no stick", function() {
  const Input: ComputedOrder = {
    drink: "Chocolate",
    sugar: 0,
    stick: "WITHOUT_STICK",
    type: "EXTRA_HOT"
  };
  expect(HandleOrder(Input)).toEqual("Hh::");
});

it("Drink maker makes 1  extraHot coffee with 2 sugars and a stick", function() {
  const Input: ComputedOrder = {
    drink: "Coffee",
    sugar: 2,
    stick: "WITH_STICK",
    type: "EXTRA_HOT"
  };
  expect(HandleOrder(Input)).toEqual("Ch:2:0");
});

it("machine get a make Tea instruction", function() {
  const Given: BaseOrder = {
    drink: "Tea",
    sugar: 0,
    type: "HOT"
  };
  const amount = 300;

  expect(HandleMoney(Given, amount)).toEqual("T::");
});


it("machine get a make Tea instruction", function() {
  const Given: BaseOrder = {
    drink: "Tea",
    sugar: 0,
    type: "HOT"
  };
  const amount = 300;

  expect(HandleMoney(Given, amount)).toEqual("T::");
});


it("machine get a make Tea instruction", async function() {
  const Drink = "Tea"

  const Dependencies: IStock = {
    beverageQuantityChecker: jest.fn().mockResolvedValueOnce(false),
    notifyMissingDrink: jest.fn()
  };
  await HandleStock("Tea", Dependencies)
  expect(Dependencies.notifyMissingDrink).toBeCalledWith(Drink);
});
