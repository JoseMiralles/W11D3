import { combineReducers } from "redux";

import benchesReducer from "./benches_reducer";
import usersReducer from "./users_reducer";

export default combineReducers({
    users: usersReducer,
    benches: benchesReducer
});