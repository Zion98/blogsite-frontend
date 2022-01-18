import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/Context";
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) =>
        state.user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { state } = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) =>
        state.user && state.user?.token ? (
          <Redirect to="/app/articles" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
