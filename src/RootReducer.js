import { combineReducers } from "redux";
import { testReducer } from "./TestReducer";

const rootReducer = combineReducers({testReducer})

export default rootReducer;