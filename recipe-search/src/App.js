import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Form from './components/Form';
import { Container, CssBaseline } from '@material-ui/core';

function App() {
  return (
    <Container disableGutters maxWidth="false">
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Recipe Search</Typography>
        </Toolbar>
      </AppBar>
      <Form />
    </Container>
  );
}

export default App;
