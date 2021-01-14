import { fetchBenches } from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

export const fetchBenchesAction = () => {
    return (dispatch) => {
        return fetchBenches().then((benches) => {
            return dispatch( receiveBenches(benches) );
        });
    }
}