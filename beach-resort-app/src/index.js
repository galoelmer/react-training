import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { RoomProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <RoomProvider>
      <Router>
        <App />
      </Router>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
