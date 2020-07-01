import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import { Typography, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  featuredRooms: {
    padding: '3rem 0',
    textAlign: 'center',
  },
  divider: {
    width: '5rem',
    height: '5px',
    margin: '0 auto 2.5rem',
    background: '#af9a7d',
  },
});

export default function () {
  const context = useContext(RoomContext);
  const classes = useStyles();

  let { loading, featuredRooms: rooms } = context;
  rooms = rooms.map((room) => {
    return (
      <Grid key={room.id} item xs={12} sm={4} md={3}>
        <Room room={room} />
      </Grid>
    );
  });
  return (
    <div className={classes.featuredRooms}>
      <Typography variant="h4" gutterBottom>
        Featured Rooms
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={2} justify="center">
        {loading ? <Loading /> : rooms}
      </Grid>
    </div>
  );
}
