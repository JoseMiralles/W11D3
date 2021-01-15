import { connect } from "react-redux";

import { createBenchAction } from "../../actions/bench_actions";
import BenchForm from "./bench_form";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    return {
        createBench: benchForm => dispatch(createBenchAction(benchForm))
    }
}

const benchFormContainer = connect(mapStateToProps, mapDispatchToProps)(BenchForm);
export default benchFormContainer;