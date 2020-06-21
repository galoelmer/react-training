import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Anchor from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import HotelIcon from '@material-ui/icons/Hotel';
import logo from '../images/logo.svg';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 200,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  listItems: {
    display: 'flex',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'right' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={clsx({ [classes.listItems]: matches })}>
        {[
          { name: 'Home', path: '/', icon: <HomeIcon /> },
          { name: 'Rooms', path: '/rooms', icon: <HotelIcon /> },
        ].map((item, index) => (
          <Link to={item.path} key={item.name}>
            <Anchor component="button">
              <ListItem>
                <ListItemIcon>{!matches ? item.icon : null}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Anchor>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#eceff1' }}>
        <Toolbar className={clsx({[classes.toolbar]:!matches})}>
          <CardMedia
            style={{ width: '180px' }}
            component="img"
            alt="Beach Resort Logo"
            image={logo}
          />
          <Hidden xsDown implementation="css">
            {list('right')}
            {/* <Typography>
              <Link to="/">
                <Anchor variant="body1">Home</Anchor>
              </Link>

              <Link to="/rooms">
                <Anchor variant="body1">Rooms</Anchor>
              </Link>
            </Typography> */}
          </Hidden>
          <Hidden smUp implementation="css">
            <IconButton
              // edge="end"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer('right', true)}
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={state['right']}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </div>
  );
}
