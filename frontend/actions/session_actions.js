import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
        user: null
    }
}

export const receiveErrors = (user) => {
    return {
        type: RECEIVE_ERRORS,
        user
    }
}

export const login = (userForm) => {
    return (dispatch) => {
        return APIUtil.login(userForm)
            .then((resUser) => dispatch(receiveCurrentUser(resUser)));
    }
}

export const logout = () => {
    return dispatch => {
        return APIUtil.logout()
            .then(dispatch(logoutCurrentUser()));
    }
}

export const signup = (userForm) => {
    return dispatch => {
        return APIUtil.signup(userForm)
            .then(resUser => dispatch(receiveCurrentUser(resUser)));
    }
}