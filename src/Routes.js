import React from "react";
import { Route } from "react-router-dom";
import About from "./views/About/About";
import Homepage from "./views/Homepage/Homepage";
import Cv from "./views/CV/Cv";
import Projects from "./views/Projects/Projects"

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/cv" component={Cv} />
      <Route exact path="/projects" component={Projects} />
    </>
  );
};

export default Routes;