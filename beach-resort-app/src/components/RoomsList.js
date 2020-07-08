import React from 'react';
import Room from '../components/Room';
import { Container, Grid, Box } from '@material-ui/core';

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <Container>
        <Box variant='h3' component='h3' align='center' mb={10}>No rooms matched your search parameters</Box>
      </Container>
    );
  }
  return (
    <Container>
      <Grid container>
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
