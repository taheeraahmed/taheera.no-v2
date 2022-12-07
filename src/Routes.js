import React, { useEffect, useState } from "react";
import { Route, useLocation,Switch } from "react-router-dom";
import About from "./views/About/About";
import Homepage from "./views/Homepage/Homepage";
import Cv from "./views/CV/Cv";
import Projects from "./views/Projects/Projects"
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { useTranslation } from "react-i18next";
import Dashboard from "./views/Dashboard/Dashboard";
import Register from "./views/Register/Register";
import LinkTree from "./views/LinkTree/LinkTree";


const Routes = () => {
  const location = useLocation()
  const [, setPageTitle] = useState('Home');

  const { t } = useTranslation();


  useEffect(() => {
    const titleMap = [
      { path: "/", title: "Taheera Ahmed" },
      { path: "/linktree", title: "Taheera Ahmed" },
      { path: "/about", title: `${t("common.aboutme")} | Taheera` },
      { path: "/cv", title: "CV | Taheera " },
      { path: "/projects", title: `${t("common.projects")} | Taheera` },
    ];

    const curTitle = titleMap.find(item => item.path === location.pathname)
    if(curTitle && curTitle.title){
      setPageTitle(curTitle.title)
      document.title = curTitle.title
    }
  }, [location.pathname, t])


  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade" key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/cv" component={Cv} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/linktree" component={LinkTree} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Routes;