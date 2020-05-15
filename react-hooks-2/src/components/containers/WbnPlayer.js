import React from 'react';
import Video from '../Video';
import Playlist from './Playlist';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const WbnPlayer = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Paper className={classes.paper}>
            <Video />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper className={classes.paper}>
            <Playlist />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default WbnPlayer;
