import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const defaultState = [];

const sessionErrorsReducer = (state = defaultState, action) => {

    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return defaultState;

        case RECEIVE_ERRORS:
            return action.errors;

        default: return state;
    }

}

export default sessionErrorsReducer;