import React, { useContext } from 'react';
// import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    textDecoration: 'none',
    letterSpacing: '3px',
    color: '#000',
    background: '#af9a7d',
    padding: '0.7rem 1rem',
    border: '3px solid #af9a7d',
    transition: 'all 0.3s linear',
    textTransform: 'uppercase',
    borderRadius: '3px',
    '&:hover': {
      background: 'none',
      color: '#fff',
    },
  },
});

export default function SingleRoom(props) {
  const classes = useStyles();
  const context = useContext(RoomContext);
  const slug = props.match.params.roomType;
  const { getRoom } = context;
  const room = getRoom(slug);
  if (!room) {
    return (
      <Hero hero="roomsHero">
        <Banner title='Room not available'>
          <Link className={classes.button} to="/rooms">
            back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  return (
    <Hero hero="roomsHero" image={images[0]}>
      <Banner title={`${name} room`}>
        <Link className={classes.button} to="/rooms">
          back to rooms
        </Link>
      </Banner>
    </Hero>
  );
}
