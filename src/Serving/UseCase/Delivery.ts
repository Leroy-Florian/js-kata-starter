import { machineInput, MachineInstruction } from "./type";
import { DrinkInformation } from "../../type";
import {
  BaseOrder,
  ComputedOrder,
  OrderService,
  PaymentService ,drink
} from "../Service";
import { IStock } from "../Service/Stock/Ports";
import { DrinkList } from "../Constant";

const { createOrder } = OrderService;
const {
  handleBalance,
  isEnough
} = PaymentService

export const HandleMoney = (order: BaseOrder, money: number): machineInput => {
  const computedOrder = createOrder(order);
  const Money = handleBalance(computedOrder, money);

  if (isEnough(Money)) {
    return HandleOrder(computedOrder);
  }
  return HandleMessage("not enough money");
};


export const HandleStock =  async(drink: drink, input: IStock): Promise<void> => {
  const {
    beverageQuantityChecker,
    notifyMissingDrink
  } = input;

  if (!(await beverageQuantityChecker(drink))) {
    await notifyMissingDrink(drink);
  }
};

export const HandleMessage = (input: MachineInstruction): machineInput => `M:${input}`;

export const HandleOrder = (input: ComputedOrder): machineInput => {
  const DrinkIO: DrinkInformation = DrinkList.find((obj: DrinkInformation) => obj.name === input.drink)!;
  const DrinkOutput = input.type == "EXTRA_HOT" ? `${DrinkIO.output}h` : `${DrinkIO.output}`;

  if (input.stick === "WITH_STICK") {
    return `${DrinkOutput}:${input.sugar}:0`;
  }
  return `${DrinkOutput}::`;
};

