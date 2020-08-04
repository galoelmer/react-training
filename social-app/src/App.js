import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Material UI Components
import { CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';

//Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#47c4fd',
      main: '#03a9f4',
      dark: '#0275a8',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fd7f47',
      main: '#f44e03',
      dark: '#a83602',
      contrastText: '#000',
    },
  },
});

theme = responsiveFontSizes(theme);

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
