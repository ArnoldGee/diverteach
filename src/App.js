import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/header.component';
import LandingPage from './pages/landing-page/landing-page.component';
import Dashboard from './pages/dashboard/dashboard.component';

import './App.scss';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={LandingPage} />
      </Switch>
      Hello World!
    </div>
  );
}

export default App;
