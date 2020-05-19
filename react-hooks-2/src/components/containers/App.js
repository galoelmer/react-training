import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WbnPlayer from './WbnPlayer';
import Container from '@material-ui/core/Container';
import GlobalStyles from '../styles/GlobalStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export const ThemeContext = createContext();
function App() {
  const [nightMode, setNightMode] = useState(true);
  const classes = GlobalStyles(
    nightMode ? { backgroundColor: '#ccc' } : { backgroundColor: '#fff' }
  );
  const darkTheme = createMuiTheme({
    palette: {
      type: nightMode ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeContext.Provider value={{ nightMode, setNightMode }}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Container className={classes.root}>
            <Router>
              <Switch>
                <Route exact path="/" component={WbnPlayer} />
                <Route exact path="/:activeVideo" component={WbnPlayer} />
              </Switch>
            </Router>
          </Container>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
