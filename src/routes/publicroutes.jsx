import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { TotalWrapper } from "../components/styled/index";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = lazy(() => import("../components/SignIn"));
const SignUp = lazy(() => import("../components/SignUp"));

function Public() {
  return (
    <Router>
      <TotalWrapper>
        <Suspense fallback={""}>
          <Switch>
            <Route exact path="/">
              <SignIn />
            </Route>
            <Route path="/register">
              <SignUp />
            </Route>
          </Switch>
        </Suspense>
      </TotalWrapper>
    </Router>
  );
}

export default Public;
