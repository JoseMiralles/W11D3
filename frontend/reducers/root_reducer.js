import { combineReducers } from "redux";

import entityReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import UIReducer from "./ui_reducer";

export default combineReducers({
    entities: entityReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: UIReducer
});