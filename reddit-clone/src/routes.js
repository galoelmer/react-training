import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import AddPost from './containers/AddPost';

const Routes = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/add-post" component={AddPost} />
  </Router>
);

export default Routes;
