import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: '3rem',
  },
});

export default function Loading() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Rooms data loading...</Typography>
      <img src={loadingGif} alt="Loading GIF" />
    </div>
  );
}
