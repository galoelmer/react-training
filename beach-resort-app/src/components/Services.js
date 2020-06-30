import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Box, Divider } from '@material-ui/core';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import LandscapeIcon from '@material-ui/icons/Landscape';

const useStyles = makeStyles({
  services: {
    padding: '3rem 0',
    background: '#cfcfcf',
    textAlign: 'center',
  },
  divider: {
    width: '5rem',
    height: '5px',
    margin: '0 auto 2.5rem',
    background: '#af9a7d',
  },
  icon: {
    display: 'inline-block',
    color: '#af9a7d',
    marginBottom: '1rem',
  },
  title: {
    letterSpacing: '3px',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  content: {
    margin: '0 auto',
    width: '80%',
  },
});

const Services = () => {
  const classes = useStyles();
  const services = [
    {
      icon: <LocalBarIcon fontSize="large" />,
      title: 'Free Cocktails',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <LandscapeIcon fontSize="large" />,
      title: 'Endless Hiking',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <AirportShuttleIcon fontSize="large" />,
      title: 'Free Shuttle',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
    {
      icon: <LocalDrinkIcon fontSize="large" />,
      title: 'Strongest Beer',
      info:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?',
    },
  ];

  return (
    <Box className={classes.services}>
      <Typography variant="h4" gutterBottom>
        Services
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        {services.map((service) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={service.title}>
              <span className={classes.icon}>{service.icon}</span>
              <Typography className={classes.title} variant="subtitle1">
                {service.title}
              </Typography>
              <Typography className={classes.content} component="p">
                {service.info}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Services;
