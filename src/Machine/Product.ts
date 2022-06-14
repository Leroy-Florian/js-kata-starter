import { DrinkInformation } from "../type";

export const Tea :DrinkInformation = {
  name: "Tea",
  output: "T",
  price: {
    amount: 400,
    currency: 'EUR_cts',
  },
}
export const Chocolate :DrinkInformation = {
  name: "Chocolate",
  output: "H",
  price: {
    amount: 300,
    currency: 'EUR_cts',
  },
}
export const Coffee :DrinkInformation = {
  name: "Coffee",
  output: "C",
  price:{
    amount: 600,
    currency: 'EUR_cts',
  },
}

export const Orange :DrinkInformation = {
  name: "Orange",
  output: "O",
  price:{
    amount: 600,
    currency: 'EUR_cts',
  },
}

export const DrinkList :DrinkInformation[] = [Tea, Chocolate, Coffee, Orange];
