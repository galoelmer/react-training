import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

serviceWorker.unregister();
