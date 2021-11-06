import React from "react";
import { Route } from "react-router-dom";
import About from "./views/About/About";
import Homepage from "./views/Homepage/Homepage";

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
    </>
  );
};

export default Routes;