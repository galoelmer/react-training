import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const PlaylistItem = ({ video }) => {
  return (
    <div>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>{video.num}</Avatar>
        </ListItemAvatar>
        <ListItemText primary={video.title} />
        <Avatar style={{ fontSize: '14px' }} variant="rounded">
          {video.duration}
        </Avatar>
      </ListItem>
      <Divider />
    </div>
  );
};

export default PlaylistItem;
