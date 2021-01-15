import { combineReducers } from "redux";
import filterReducer from "./filter_reducer";


const UIReducer = combineReducers({
    filter: filterReducer
});

export default UIReducer;