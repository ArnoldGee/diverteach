import React, {useContext} from 'react';
import {Switch, Route } from 'react-router-dom';
import {__RouterContext} from 'react-router'
import {useTransition, animated} from 'react-spring'


import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Opos from './pages/opos/opos.component'

import './App.scss';

function App() {

  const {location} = useContext(__RouterContext);

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0, transform: "translate(100%, 0)"},
    enter: {opacity: 1, transform: "translate(0, 0)"},
    leave: {opacity: 0, transform: "translate(-80%, 0)"},
  });

  return (
    
      <div className="app">
          <Header />
          <div className="header-space"></div>
          {transitions.map(({item, props, key}) => (
            <animated.div className="transition-container" key={key} style={props}>
                <Switch location={item}>
                  <Route path="/opos" component={Opos} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/" component={LandingPage} />
                </Switch>
            </animated.div>
          ))}
      </div>
    
  );
}

export default App;
