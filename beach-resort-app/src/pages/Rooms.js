import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  button: {
    display: 'inline-block',
    textDecoration: 'none',
    letterSpacing: '3px',
    color: '#000',
    background: '#af9a7d',
    padding: '0.4rem 0.9rem',
    border: '3px solid #af9a7d',
    transition: 'all 0.3s linear',
    textTransform: 'uppercase',
  },
});

const Rooms = () => {
  const classes = useStyles();
  return (
    <Hero>
      <Banner title="our rooms">
        <Button>
          <Link className={classes.button} to="/">
            return home
          </Link>
        </Button>
      </Banner>
    </Hero>
  );
};

export default Rooms;
