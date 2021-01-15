import { CHANGE_FILTER } from "../actions/filter_actions";

const filterReducer = (state = {}, action) => {
    
    Object.freeze(state);

    switch(action.type){

        // case UPDATE_BOUNDS:
        //     return Object.assign({}, state, { bounds: action.bounds });

        case CHANGE_FILTER:
            return Object.assign
                ({}, state, { [action.filterType]: action.newValue });

        default: return state;

    }

}

export default filterReducer;