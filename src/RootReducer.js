import { combineReducers } from "redux";
import { DiceHistoryReducer } from "./DiceHistoryReducer";

const rootReducer = combineReducers({diceHistory: DiceHistoryReducer})

export default rootReducer;