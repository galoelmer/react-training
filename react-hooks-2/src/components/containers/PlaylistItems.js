import React, { useContext } from 'react';
import PlaylistItem from '../PlaylistItem';
import StylePlaylistItems from '../styles/StylePlaylistItems';
import List from '@material-ui/core/List';

import { Context } from './WbnPlayer';

const Playlist = () => {
  const { state } = useContext(Context);
  return (
    <div className={StylePlaylistItems().root}>
      <List component="nav">
        {state.videos.map((video) => (
          <PlaylistItem video={video} key={video.id} />
        ))}
      </List>
    </div>
  );
};

export default Playlist;
