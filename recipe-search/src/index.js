import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouterApp from './components/Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RouterApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
