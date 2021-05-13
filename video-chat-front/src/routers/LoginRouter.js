import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../pages";

function LoginRouter() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route exact path="/login">
                <LoginPage />
            </Route>
        </Switch>
    );
}

export default LoginRouter;
