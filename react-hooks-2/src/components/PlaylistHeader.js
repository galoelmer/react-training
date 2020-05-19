import React from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import StylePlaylistHeader from './styles/StylePlaylistHeader';

const PlaylistHeader = () => {
  //const classes = StylePlaylistHeader();
  return (
    <Paper
      variant="outlined"
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '3px',
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Current video title goes here
      </Typography>
      <Chip label="2/9" />
    </Paper>
  );
};

export default PlaylistHeader;
