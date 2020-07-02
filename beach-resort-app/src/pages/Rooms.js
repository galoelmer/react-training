import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { makeStyles } from '@material-ui/core/styles';
import RoomsContainer from '../components/RoomsContainer';

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

const Rooms = () => {
  const classes = useStyles();
  return (
   <>
      <Hero>
        <Banner title="our rooms">
          <Link className={classes.button} to="/">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
   </>
  );
};

export default Rooms;
