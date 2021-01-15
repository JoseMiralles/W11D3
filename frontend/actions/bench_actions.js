import { createBench, fetchBenches } from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

export const receiveBench = (bench) => {
    return {
        type: RECEIVE_BENCH,
        bench
    }
}

export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

// const defaultFilters = {
//     bounds: {
//         southWest: { lat: 37.554957226606774, lng: -77.47526029602743 },
//         northEast: { lat: 37.56070650091237, lng: -77.46843228268627 }
//     }
// };
export const fetchBenchesAction = (filters) => {
    return (dispatch) => {
        return fetchBenches(filters).then((benches) => {
            return dispatch( receiveBenches(benches) );
        });
    }
}

export const createBenchAction = (bench) => {
    return(dispatch) => {
        return createBench(bench).then(bench => {
            return dispatch(receiveBench(bench));
        });
    }
}