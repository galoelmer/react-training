import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container maxWidth="xl" disableGutters style={{ overflow: 'hidden' }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:roomType" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </Container>
  );
}

export default App;
