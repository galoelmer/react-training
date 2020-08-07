import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import './App.css';

//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';

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
      light: '#fc5d15',
      main: '#db4603',
      dark: '#fc5d15',
      contrastText: '#fff',
    },
  },
});

theme = responsiveFontSizes(theme);

const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = '/login';
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <AuthRoute
                  exact
                  path="/login"
                  component={Login}
                />
                <AuthRoute
                  exact
                  path="/signup"
                  component={SignUp}
                />
              </Switch>
            </div>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
