import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
