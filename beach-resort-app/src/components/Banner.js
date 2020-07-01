import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    padding: '2rem 1rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    letterSpacing: '3px',
    borderRadius: '5px',
    margin: '0 1rem'
  },
  title: {
    fontSize: '2.5rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  divider: {
    width: '10rem',
    height: '5px',
    background: '#af9a7d',
    margin: '1.7rem auto',
  },
  [theme.breakpoints.up('xs')]: {
    root: {
      padding: '2rem 3rem',
    },
    title: {
      fontSize: '3rem',
    },
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      padding: '2rem 6rem',
    },
    title: {
      fontSize: '4rem',
    },
  },
}));

export default function Banner({ title, subtitle, children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title}>{title}</Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.subtitle}>{subtitle}</Typography>
      {children}
    </div>
  );
}
