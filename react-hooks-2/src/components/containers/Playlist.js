import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';
import StylePlaylist from '../styles/StylePlaylist';

const Playlist = () => {
  const classes = StylePlaylist();
  return (
    <div className={classes.root}>
      <NightMode />
      <PlaylistHeader />
      <PlaylistItems />
    </div>
  );
};

export default Playlist;
