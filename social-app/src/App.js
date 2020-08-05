import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import './App.css';

// Components
import AuthRoute from './util/AuthRoute';

// Material UI Components
import { CssBaseline } from '@material-ui/core';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
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

let authenticated;
const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

export class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute
                  exact
                  path="/login"
                  component={Login}
                  authenticated={authenticated}
                />
                <AuthRoute
                  exact
                  path="/signup"
                  component={SignUp}
                  authenticated={authenticated}
                />
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
