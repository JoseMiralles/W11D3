import { fetchBenches } from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const receiveBenches = (benches) => {
    return {
        type: RECEIVE_BENCHES,
        benches
    }
}

const defaultFilters = {
    bounds: {
        southWest: { lat: 37.554957226606774, lng: -77.47526029602743 },
        northEast: { lat: 37.56070650091237, lng: -77.46843228268627 }
    }
};
export const fetchBenchesAction = (filters) => {
    return (dispatch) => {
        return fetchBenches(filters).then((benches) => {
            return dispatch( receiveBenches(benches) );
        });
    }
}