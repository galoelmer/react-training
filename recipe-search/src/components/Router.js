import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import Recipe from './Recipe';

const RouterApp = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={App} />
          <Route path="/recipe/:id" component={Recipe} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
