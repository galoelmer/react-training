import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MyButton from '../util/MyButton';
import PostScream from './PostScream';

// Material ui Components
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import Notifications from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    margin: 'auto',
  },
  root: {
    backgroundColor: '#03a9f4',
    '& svg': {
      color: '#fff'
    }
  },
}));

const Navbar = ({ authenticated }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} color="primary">
      <Toolbar className={classes.toolbar}>
        {authenticated ? (
          <>
            <PostScream />
            <Link to="/">
              <MyButton tip="Home">
                <HomeIcon />
              </MyButton>
            </Link>
            <MyButton tip="Notifications">
              <Notifications />
            </MyButton>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
