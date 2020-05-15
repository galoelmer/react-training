import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WbnPlayer from './WbnPlayer';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={WbnPlayer} />
        <Route exact path="/:activeVideo" component={WbnPlayer} />
      </Switch>
    </Router>
  );
}

export default App;
