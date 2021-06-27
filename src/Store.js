import { createStore } from "redux";
import rootReducer from "./RootReducer";

function configureStore(){
    return createStore(rootReducer, {});
}

export default configureStore;
