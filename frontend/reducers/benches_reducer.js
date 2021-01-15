import { RECEIVE_BENCH, RECEIVE_BENCHES } from "../actions/bench_actions";

const defaultState = {};

const benchesReducer = (state = defaultState, action) => {

    Object.freeze(state);

    switch(action.type){

        case RECEIVE_BENCHES:
            return action.benches;

        case RECEIVE_BENCH:
            return Object.assign({}, state, action.bench)

        default: return state;

    }

}

export default benchesReducer;