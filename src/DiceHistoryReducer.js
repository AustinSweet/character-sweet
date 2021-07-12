import { ADD_DICE_ROLL } from "./ActionTypes";

const initialstate = { diceRollHistory: [] };

export function DiceHistoryReducer(state = initialstate, action) {
    if (action.type === ADD_DICE_ROLL) {
        return {
            ...state,
            diceRollHistory: state.diceRollHistory.concat(action.payload)
        }
    }
    return state;
}