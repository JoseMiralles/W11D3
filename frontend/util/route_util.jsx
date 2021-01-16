import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

// Renders component if user is NOT logged in, redirects to "/" otherwise.
const Auth = ({component: Component, path, loggedIn, exact}) => {
    return(
        <Route 
        path={path}
        exact={exact}
        render={ (props) => loggedIn ? <Redirect to="/" /> : <Component {...props} /> }
        />
    )
}

// Renders component if user is loggedin, redirects to login page otherwise.
const Protected = ({component: Component, path, loggedIn, exact}) => {
    return(
        <Route 
        path={path}
        exact={exact}
        render={ (props) => loggedIn ? <Component {...props}/> : <Redirect to="/signup" /> }
        />
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: Boolean( state.session.id )
    }
}

export const AuthRoute = withRouter( connect(mapStateToProps, null)(Auth) );
export const ProtectedRoute = withRouter( connect(mapStateToProps, null)(Protected) );