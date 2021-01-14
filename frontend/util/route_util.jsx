import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Auth = ({component: Component, path, loggedIn, exact}) => {
    return <Route 
        path={path}
        exact={exact}
        render={ (props) => loggedIn ? <Redirect to="/" /> : <Component {...props} /> }
    />
}

const mapStateToProps = state => {
    return {
        loggedIn: Boolean( state.session.id )
    }
}

const AuthRoute = withRouter( connect(mapStateToProps, null)(Auth) );

export default AuthRoute;