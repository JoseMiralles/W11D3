import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const defaultState = {
    id: null
};

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        
        case RECEIVE_CURRENT_USER:
            return { id: Object.values(action.user)[0].id };
        
        case LOGOUT_CURRENT_USER:
            return defaultState;

        default:
            return state;
    }

}

export default sessionReducer;