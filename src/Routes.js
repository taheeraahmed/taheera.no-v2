import React, { useEffect, useState } from "react";
import { Route, useLocation,Switch } from "react-router-dom";
import About from "./views/About/About";
import Homepage from "./views/Homepage/Homepage";
import Cv from "./views/CV/Cv";
import Projects from "./views/Projects/Projects"
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Routes = () => {
  const location = useLocation()
  const [pageTitle, setPageTitle] = useState('Home');

  const titleMap = [
    {path: '/', title:'Taheera Ahmed'},
    {path: '/about', title:'Om meg | Taheera '},
    {path: '/cv', title:'CV | Taheera '},
    {path: '/projects', title:'Prosjekter | Taheera '},
  ]
  useEffect(() => {
    const curTitle = titleMap.find(item => item.path === location.pathname)
    if(curTitle && curTitle.title){
      setPageTitle(curTitle.title)
      document.title = curTitle.title
    }
  }, [location])


  return (
    <TransitionGroup>
        <CSSTransition
          timeout={300}
          classNames='fade'
          key={location.key}
        >
          <Switch location={location}>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/cv" component={Cv} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </CSSTransition>
        </TransitionGroup>
  );
};

export default Routes;