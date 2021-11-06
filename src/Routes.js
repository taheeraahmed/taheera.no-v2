import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./views/Dashboard/Dashboard";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={App} />
      <Route exact path="/dashboard" component={Dashboard} />
    </>
  );
};

export default Routes;