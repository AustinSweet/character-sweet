import { createStore } from "redux";
import rootReducer from "./RootReducer";

let initialstate;
const localStorageState = localStorage.getItem('data');

if(localStorageState) {
    initialstate = {
    data: JSON.parse(data)
    }
}

const store = createStore(rootReducer, initialstate);

export default store;