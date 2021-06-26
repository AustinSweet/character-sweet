import { TEST } from "./Action-Types";

// const localStorageState = localStorage.getItem('data');

// if(localStorageState) {
//     this.initialstate = {
//     data: JSON.parse(localStorageState)
//     }

// }
// else {
//     this.initialState = {
//         testField: ""
//     }
// }

let initialState = {
    testField: ''
}

function rootReducer(state = initialState, action) {
    if (action.type === TEST) {
        return Object.assign({}, state, {
            testField: state.testField.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;