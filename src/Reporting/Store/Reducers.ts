import { Report } from "../type";
import { Action } from "./type";
import { actionType } from "./Actions";

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

export function ReportReducer(state: Report, action: Action): Report {
  switch (action.type) {
    case actionType.BUY_DRINK:
      return {
        ...state,
        [action.payload.drink]: {
          ...state[action.payload.drink],
          sold: state[action.payload.drink].sold + 1,
          earned: state[action.payload.drink].earned + action.payload.price.amount
        }
      };
    case actionType.RESET_REPORT:
      return initialReport;
    default:
      return state;
  }
}
