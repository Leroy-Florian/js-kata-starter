type WithStick = "WITH_STICK"
type WithoutStick = "WITHOUT_STICK"
type ExtraHot = "EXTRA_HOT"
type Hot = "HOT"
type Cold = "COLD"
type Orange = "Orange"
type coffee = "Coffee"
type Chocolate = "Chocolate"
type Tea = "Tea"

export type drinkTemperature = ExtraHot | Hot |Cold
type coldDrink = Orange
type hotDrink =  coffee| Chocolate |  Tea
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
  type: Cold,
}
type HotDrink = {
  drink: hotDrink,
  type: Hot | ExtraHot,
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
