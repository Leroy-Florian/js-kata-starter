import { Coffee, Tea } from "../Serving";
import { Report } from "./type";
import { ReportReducer } from "./Store/Reducers";
import { BuyDrinkAction, ResetReport } from "./Store/Actions";

const initialReport: Report = {
  Chocolate: {
    sold: 0,
    earned: 0
  },
  Coffee: {
    sold: 0,
    earned: 0
  },
  Tea: {
    sold: 0,
    earned: 0
  },
  Orange: {
    sold: 0,
    earned: 0
  }
};

it("Buy a Coffee and update Report", function() {
  const initial = initialReport;
  const expected = {
    ...initial,
    Coffee: {
      ...initial.Coffee,
      sold: 1,
      earned: 600
    }
  };

  expect(ReportReducer(initial, BuyDrinkAction(Coffee.name, Coffee.price))).toEqual(expected);
});

it("Buy a second Coffee and update Report", function() {
  const initial =  {
    ...initialReport,
    Coffee: {
      ...initialReport.Coffee,
      sold: 1,
      earned: 600
    }
  };
  const expected = {
    ...initial,
    Coffee: {
      ...initial.Coffee,
      sold: 2,
      earned: 1200
    }
  };
  expect(ReportReducer(initial, BuyDrinkAction(Coffee.name, Coffee.price))).toEqual(expected);
});

it("Buy a Tea after with 2 coffee in initial state", function() {
  const initial =  {
    ...initialReport,
    Coffee: {
      ...initialReport.Coffee,
      sold: 2,
      earned: 1200
    }
  };
  const expected = {
    ...initial,
    Tea: {
      ...initial.Tea,
      sold: 1,
      earned: 400
    }
  };
  expect(ReportReducer(initial, BuyDrinkAction(Tea.name, Tea.price))).toEqual(expected);
});

it("Should Reset Report ", function() {
  const initial =  {
    ...initialReport,
    Coffee: {
      ...initialReport.Coffee,
      sold: 2,
      earned: 1200
    }
  };

  expect(ReportReducer(initial, ResetReport())).toEqual(initialReport);
});
