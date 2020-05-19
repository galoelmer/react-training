import React, { useContext } from 'react';
import PlaylistItem from '../PlaylistItem';
import StylePlaylistItems from '../styles/StylePlaylistItems';
import List from '@material-ui/core/List';
import withLink from '../hoc/withLink';
import { Context } from './WbnPlayer';

const PlaylistItemWithLink = withLink(PlaylistItem);

const Playlist = () => {
  const { state } = useContext(Context);
  return (
    <div className={StylePlaylistItems().root}>
      <List>
        {state.videos.map((video) => (
          <PlaylistItemWithLink video={video} key={video.id} />
        ))}
      </List>
    </div>
  );
};

export default Playlist;
