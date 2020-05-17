import React, { useState } from 'react';
import Video from '../Video';
import Playlist from './Playlist';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StyleWbnPlayer from '../styles/StyleWbnPlayer';

const WbnPlayer = (props) => {
  const [nightMode, setNightMode] = useState(true);

  const darkTheme = createMuiTheme({
    palette: {
      type: nightMode ? 'dark' : 'light',
    },
  });
  const classes = StyleWbnPlayer();

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Paper className={classes.paper}>
              <Video />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper className={classes.paper}>
              <Playlist nightMode={nightMode} setNightMode={setNightMode} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default WbnPlayer;
