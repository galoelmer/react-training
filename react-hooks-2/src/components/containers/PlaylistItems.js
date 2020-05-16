import React from 'react';
import PlaylistItem from '../PlaylistItem';
import StylePlaylistItems from '../styles/StylePlaylistItems';

const Playlist = (props) => {
  return (
    <>
      <PlaylistItem className={StylePlaylistItems().root}/>
    </>
  );
};

export default Playlist;
