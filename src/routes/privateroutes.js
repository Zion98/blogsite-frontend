import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Header from "../components/Header";
import { PrivateRoute } from "./PrivateRoute";
import { TotalWrapper } from "../components/styled/index";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TextEditor = lazy(() => import("../components/TextEditor"));
const Articles = lazy(() => import("../components/Articles"));
const SingleArticle = lazy(() => import("../components/SingleArticle"));

function PrivateRoutes() {
  return (
    <Router>
      <TotalWrapper>
        <Header />
        <Suspense fallback={""}>
          <Switch>
            <PrivateRoute path="/app/articles" component={Articles} />
            <PrivateRoute path="/app/create" component={TextEditor} />
            <PrivateRoute path="/app/article1/:id" component={SingleArticle} />
            <Redirect from="/app" to="/app/articles" />
          </Switch>
        </Suspense>
      </TotalWrapper>
    </Router>
  );
}

export default PrivateRoutes;
