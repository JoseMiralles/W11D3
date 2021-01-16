import React from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

import { AuthRoute, ProtectedRoute } from "./util/route_util";
import LoginFormContainer from "./components/auth/login_form_container";
import SignupFormContainer from "./components/auth/signup_form_container";
import GreetingContainer from "./components/greeting_container";
import benchIndexContainer from "./components/benches/bench_index_container";
import SearchContainer from "./components/benches/search_container";
import benchFormContainer from "./components/benches/bench_form_container";

const App = () => {
    return (
        <div>
            <div><GreetingContainer /></div>

            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />

            <ProtectedRoute path="/benches/new" component={benchFormContainer} />

            <Route exact path="/" component={SearchContainer} />
            {/* <Route path="/benches/new" component={benchFormContainer} /> */}
        </div>
    );
}

export default App;