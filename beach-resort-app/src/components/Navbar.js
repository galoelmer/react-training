import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import blueGrey from '@material-ui/core/colors/blueGrey';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import HotelIcon from '@material-ui/icons/Hotel';
import CloseIcon from '@material-ui/icons/Close';
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
  closeButton: {
    backgroundColor: `${blueGrey[50]}`
  }
}));

export default function ButtonAppBar() {
  window.addEventListener('resize', function (e) {
    const screenSize = e.target.screen.width;
    if (screenSize > 600) {
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
      <AppBar position="fixed" style={{ backgroundColor: '#eceff1' }}>
        <Toolbar className={clsx({ [classes.toolbar]: !matches })}>
          <RouterLink to="/">
            <CardMedia
              style={{ width: '180px' }}
              component="img"
              alt="Beach Resort Logo"
              image={logo}
            />
          </RouterLink>
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
          <Box className={classes.closeButton} onClick={toggleDrawer()}>
            <IconButton>
              <CloseIcon />
              <Typography>Close</Typography>
            </IconButton>
          </Box>

          <Divider />
          {list()}
        </Drawer>
      </AppBar>
    </div>
  );
}
