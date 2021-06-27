import { TEST } from "./ActionTypes";

const initialState = {};

export function testReducer(state = {}, action) {
    if (action.type === TEST) {
        if (action.type === TEST) {
            return Object.assign({}, state, {
                testField: state.testField.concat(action.payload)
            })
        }
        return state;
    }
}