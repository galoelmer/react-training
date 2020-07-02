import React from 'react';
import Room from '../components/Room';
import { Container, Grid } from '@material-ui/core';

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div>
        <h5>No rooms matched your search paramenters</h5>
      </div>
    );
  }
  return (
    <Container>
      <Grid container spacing={0}>
        {rooms.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Room room={item} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
