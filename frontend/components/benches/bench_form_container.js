import { connect } from "react-redux";

import { createBenchAction } from "../../actions/bench_actions";
import BenchForm from "./bench_form";

const mapStateToProps = (state, ownProps) => {
    const sp = new URLSearchParams(ownProps.location.search);
    return {
        lat: sp.get("lat"),
        lng: sp.get("lng")
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBench: benchForm => dispatch(createBenchAction(benchForm))
    }
}

const benchFormContainer = connect(mapStateToProps, mapDispatchToProps)(BenchForm);
export default benchFormContainer;