import React from 'react';
import PlaylistHeader from '../styles/PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../styles/NightMode';

const Playlist = (props) => {
  return (
    <>
      <NightMode />
      <PlaylistHeader />
      <PlaylistItems />
    </>
  );
};

export default Playlist;
