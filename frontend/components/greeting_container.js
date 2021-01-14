import { connect } from "react-redux";

import { logoutCurrentUser } from "../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = (state) => {
    const id = state.session.id;
    return {
        currentUser: state.entities.users[id]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutCurrentUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);