import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';
import StylePlaylist from '../styles/StylePlaylist';
import Paper from '@material-ui/core/Paper';

const Playlist = () => {
  const classes = StylePlaylist();
  return (
    <div className={classes.root}>
      <NightMode />
      <Paper variant="outlined" style={{padding: '5px'}}>
        <PlaylistHeader />
        <PlaylistItems />
      </Paper>
    </div>
  );
};

export default Playlist;
