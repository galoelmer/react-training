import React from 'react';
import { Link } from 'react-router-dom';
// Material ui Components
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    margin: 'auto',
  },
  root: {
    backgroundColor: '#03a9f4',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="primary">
      <Toolbar className={classes.toolbar}>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup">
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}
