import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
//import StylePlaylistHeader from './styles/StylePlaylistHeader';

const PlaylistHeader = () => {
  //const classes = StylePlaylistHeader();
  return (
    <Paper
      elevation={0}
      style={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Chip
        label="Current video title"
        // color="secondary"
        variant="outlined"
      />
      <Chip label="2/9" />
    </Paper>
  );
};

export default PlaylistHeader;
