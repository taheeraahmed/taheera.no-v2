import React from "react";
import { Route, useLocation,Switch } from "react-router-dom";
import About from "./views/About/About";
import Homepage from "./views/Homepage/Homepage";
import Cv from "./views/CV/Cv";
import Projects from "./views/Projects/Projects"
import { TransitionGroup, CSSTransition } from 'react-transition-group'
const Routes = () => {
  const location = useLocation()
  return (
    <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/cv" component={Cv} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </CSSTransition>
        </TransitionGroup>
  );
};

export default Routes;