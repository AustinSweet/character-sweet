import { createStore } from "redux";
import rootReducer from "./RootReducer";

const store = createStore(rootReducer);

export default store;

//Using this to scaffold out my redux store
const exampleTestingState = {
    dice: {
        lastResult: 0,
        history: [0, 0]
    },
    stats: {
        abilityScores: [
            {}, {}
        ]
    }
}
