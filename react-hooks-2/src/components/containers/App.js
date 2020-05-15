import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WbnPlayer from './WbnPlayer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '320px',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Router>
        <Switch>
          <Route exact path="/" component={WbnPlayer} />
          <Route exact path="/:activeVideo" component={WbnPlayer} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
