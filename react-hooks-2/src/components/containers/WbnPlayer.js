import React, { useState, createContext } from 'react';
import Video from '../Video';
import Playlist from './Playlist';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StyleWbnPlayer from '../styles/StyleWbnPlayer';

export const Context = createContext();

const WbnPlayer = () => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  // const [nightMode, setNightMode] = useState(false);

  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    playlistId: videos.playlistId,
    autoplay: false,
  });

  console.log(state);

  // const darkTheme = createMuiTheme({
  //   palette: {
  //     type: nightMode ? 'dark' : 'light',
  //   },
  // });
  const classes = StyleWbnPlayer();

  return (
    <Context.Provider value={{ state, setState }}>
      {/* <ThemeProvider theme={darkTheme}> */}
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Paper className={classes.paper}>
                <Video />
              </Paper>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper className={classes.paper}>
                <Playlist />
              </Paper>
            </Grid>
          </Grid>
        </div>
      {/* </ThemeProvider> */}
    </Context.Provider>
  );
};

export default WbnPlayer;
