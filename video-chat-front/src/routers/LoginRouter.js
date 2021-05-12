import { Switch, Route, Redirect } from "react-router-dom";
import { LoginPage } from "../pages";

function LoginRouter() {
    return (
        <Switch>
            <Route path="/">
                <Redirect to="/login" />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
        </Switch>
    );
}

export default LoginRouter;
