import React from "react";
import {PrivateRoute,PublicRoute} from "./PrivateRoute";
import PrivateRoutes from "./privateroutes";
import PublicRoutes from "./publicroutes";

const Index = () => {
  return (
    <>
      <PublicRoute path="/" component={PublicRoutes} />
      <PrivateRoute path="/app" component={PrivateRoutes} />
    </>
  );
};



export default Index;
