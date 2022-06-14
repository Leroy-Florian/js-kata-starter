type WithStick = "WITH_STICK"
type WithoutStick = "WITHOUT_STICK"
type drinkTemperature = "extraHot" | "hot" | "cold"
type coldDrink = "Orange"
type hotDrink =  "Coffee" | "Chocolate" |  "Tea"
export type drink = hotDrink | coldDrink

export type BaseOrder = {
  drink: drink,
  sugar: 0 | 1 | 2,
  type: drinkTemperature,
}

type WithSugar = {
  sugar: 0 | 1 | 2,
  stick: WithStick,
}
type WithoutSugar = {
  sugar: 0,
  stick: WithoutStick,
}

type ColdDrink = {
  drink: coldDrink,
  type: "cold",
}
type HotDrink = {
  drink: hotDrink,
  type: "hot" | "extraHot",
}


type OrderColdDrinkWithSugar = ColdDrink & WithSugar
type OrderColdDrinkWithoutSugar = ColdDrink & WithoutSugar
type OrderHotDrinkWithSugar = HotDrink & WithSugar
type OrderHotDrinkWithoutSugar = HotDrink & WithoutSugar


export type ComputedOrder =
  OrderColdDrinkWithSugar |
  OrderColdDrinkWithoutSugar |
  OrderHotDrinkWithSugar |
  OrderHotDrinkWithoutSugar