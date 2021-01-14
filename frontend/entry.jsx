import React from "react";
import ReactDOM from "react-dom";

import Root from "./root";
import configureStore from "./store/store";

import * as sessionActions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {

    const store = buildStore();

    if (process.env.NODE_ENV !== "production"){
        // Only transpile this when webpack is NOT in production mode.
        window.store = store;
        window.sessionActions = sessionActions;
    }

    const root = document.getElementById("root");

    ReactDOM.render(
        <Root store={store} />,
        root
    );

});

// Configures the store depending on wether there is a current user bootstraped.
const buildStore = () => {
    if ( window.currentUser ) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        }
        delete window.currentUser;
        document.getElementById("BOOTSTRAPPED_RM").innerHTML = "";
        return configureStore( preloadedState );
    }
    return configureStore();
}