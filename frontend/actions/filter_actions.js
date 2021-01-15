import { fetchBenchesAction } from "../actions/bench_actions";

export const CHANGE_FILTER = "CHANGE_FILTER";

// This action is hared by all filter types.
export const changeFilter = ( filterType, newValue ) => {
    return {
        type: CHANGE_FILTER,
        filterType,
        newValue
    }
}

export function updateFilter(filterType, value){
    return (dispatch, getState) => {
        // Change the state of the filter.
        dispatch(changeFilter(filterType, value));
        // Fetch the benches with the new filter, and update.
        return fetchBenchesAction(getState().ui.filter)(dispatch);
    }
}

// export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
// export const updateBounds = (bounds) => {
//     return {
//         type: UPDATE_BOUNDS,
//         bounds
//     };
// }