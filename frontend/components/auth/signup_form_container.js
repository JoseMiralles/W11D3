import { connect } from "react-redux";

import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "signup"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        processForm: (userForm) => dispatch(signup(userForm))
    };
}

const SignupFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm);
export default SignupFormContainer;