import { DrinkList } from "./Product";
import { BaseOrder, ComputedOrder } from "../Order/type";
import { machineInput, MachineInstruction } from "./type";
import { CreateOrder } from "../Order/Order";
import { payement } from "../Payment/Payment";
import { DrinkInformation } from "../type";

export const machine = (order: BaseOrder, money: number): machineInput => {
  const computedOrder = CreateOrder(order);
  const Money = payement(computedOrder, money);

  if (Money.amount < 0) {
    return HandleOrder(computedOrder);
  }
  return HandleMessage("");
};

export const HandleMessage = (input: MachineInstruction): machineInput => `M:${input}`;

export const HandleOrder = (input: ComputedOrder): machineInput => {
  const DrinkIO: DrinkInformation = DrinkList.find((obj: DrinkInformation) => obj.name === input.drink.name)!;
  if (input.stick === "WITH_STICK") {
    return `${DrinkIO.output}:${input.sugar}:0`;
  }
  return `${DrinkIO.output}::`;
};