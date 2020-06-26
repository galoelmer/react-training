import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles } from '@material-ui/core/styles';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Button from '@material-ui/core/Button';


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

const Home = () => {
  const classes = useStyles();
  return (
    <Hero defaultHero={true}>
      <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        <Button>
          <Link className={classes.button} to="/rooms">
            our rooms
          </Link>
        </Button>
      </Banner>
    </Hero>
  );
};

export default Home;
