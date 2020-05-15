import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';

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
