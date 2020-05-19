import React, { useContext } from 'react';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Context } from './containers/WbnPlayer';

const PlaylistHeader = () => {
  const { state } = useContext(Context);

  return (
    <Paper
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        border: '1px solid gray',
      }}
    >
      <Typography variant="h6">{state.activeVideo.title}</Typography>
      <Chip label={`${state.activeVideo.num} / ${state.videos.length}`} />
    </Paper>
  );
};

export default PlaylistHeader;
