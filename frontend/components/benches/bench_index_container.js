import { connect } from "react-redux";

import { fetchBenchesAction } from "../../actions/bench_actions";
import BenchIndex from "./bench_index";

const mapStateToProps = (state) => {
    return {
        benches: Object.values(state.entities.benches)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches: () => dispatch(fetchBenchesAction())
    }
}

const benchIndexContainer
    = connect(mapStateToProps, mapDispatchToProps)(BenchIndex);

export default benchIndexContainer;