import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import NavLink from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    '& > [role=button]': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            ExercTracker
          </Typography>
          <Button variant="outlined" color="inherit" component={Link} to="/">
            Exercises
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/create">
            Create Exercise Log
          </Button>
          <Button variant="outlined" color="inherit" component={Link} to="/user">
            Create User
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
