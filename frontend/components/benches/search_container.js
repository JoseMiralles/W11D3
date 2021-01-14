import { connect } from "react-redux";

import { fetchBenchesAction } from "../../actions/bench_actions";
import Search from "./search";

const mapStateToProps = (state) => {
    return {
        benches: Object.values(state.entities.benches)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches: () => dispatch( fetchBenchesAction() )
    }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;