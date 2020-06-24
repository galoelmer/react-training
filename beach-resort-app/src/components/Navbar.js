import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

import HomeIcon from '@material-ui/icons/Home';
import HotelIcon from '@material-ui/icons/Hotel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import logo from '../images/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
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
  window.addEventListener('resize', function (e) {
      const screenSize = e.target.screen.width;
      if (screenSize > 600 ) {
        setOpen(false);
      }
  });

  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => (event) => {
    if (
      matches ||
      (event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift'))
    ) {
      return;
    }

    setOpen(!open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List className={clsx({ [classes.listItems]: matches })}>
        {[
          { name: 'Home', path: '/', icon: <HomeIcon /> },
          { name: 'Rooms', path: '/rooms', icon: <HotelIcon /> },
        ].map((item) => (
          <Link
            style={{ color: '#333' }}
            component={RouterLink}
            to={item.path}
            key={item.name}
          >
            <ListItem>
              <ListItemIcon>{!matches ? item.icon : null}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#eceff1' }}>
        <Toolbar className={clsx({ [classes.toolbar]: !matches })}>
          <CardMedia
            style={{ width: '180px' }}
            component="img"
            alt="Beach Resort Logo"
            image={logo}
          />
          <Hidden xsDown implementation="css">
            {list()}
          </Hidden>
          <Hidden smUp implementation="css">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer()}
            >
              <MenuIcon color="primary" />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Drawer open={open} anchor="right" onClose={toggleDrawer()}>
          <Box>
            <IconButton onClick={toggleDrawer()}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
          <Divider />
          {list()}
        </Drawer>
      </AppBar>
    </div>
  );
}
