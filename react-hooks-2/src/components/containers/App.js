import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WbnPlayer from './WbnPlayer';
import Container from '@material-ui/core/Container';
import GlobalStyles from "../styles/GlobalStyles";
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  const classes = GlobalStyles();
  return (
   <>
   <CssBaseline />
      <Container className={classes.root}>
        <Router>
          <Switch>
            <Route exact path="/" component={WbnPlayer} />
            <Route exact path="/:activeVideo" component={WbnPlayer} />
          </Switch>
        </Router>
      </Container>
   </>
  );
}

export default App;
