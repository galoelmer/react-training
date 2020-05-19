import React, { useState, useEffect, createContext } from 'react';
import Video from '../Video';
import Playlist from './Playlist';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import StyleWbnPlayer from '../styles/StyleWbnPlayer';

export const Context = createContext();

const WbnPlayer = ({ match, location, history }) => {
  const classes = StyleWbnPlayer();
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  console.log(videos);

  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    playlistId: videos.playlistId,
    autoplay: false,
  });

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        (video) => video.id === videoId
      );
      setState((prev) => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        // autoplay: location.autoplay,
      }));
    } else {
      history.push({
        pathname: `/${state.activeVideo.id}`,
        autoplay: false,
      });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos,
  ]);

  return (
    <Context.Provider value={{ state, setState }}>
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
    </Context.Provider>
  );
};

export default WbnPlayer;
