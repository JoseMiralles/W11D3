import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import LoginFormContainer from "./components/auth/login_form_container";
import SignupFormContainer from "./components/auth/signup_form_container";

import GreetngContainer from "./components/greeting_container";

const App = () => {
    return (
        <div>
            <div>
                <GreetngContainer />
            </div>

            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupFormContainer} />
        </div>
    );
}

export default App;