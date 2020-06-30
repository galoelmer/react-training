import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';

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

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Hero defaultHero={true}>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link className={classes.button} to="/rooms">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
