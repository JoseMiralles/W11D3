import React from "react";
import ReactDOM from "react-dom";

import Root from "./root";
import configureStore from "./store/store";

import * as sessionActions from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {

    const store = configureStore();

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