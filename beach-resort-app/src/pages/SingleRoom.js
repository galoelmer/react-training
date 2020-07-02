import React, { useContext, useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Container,
  Grid,
  GridList,
  GridListTile,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#af9a7d',
    border: '3px solid #af9a7d',
    borderRadius: '3px',
    color: '#000',
    letterSpacing: '3px',
    padding: '0.7rem 1rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all 0.3s linear',
    '&:hover': {
      background: 'none',
      color: '#fff',
    },
  },
  paper: {
    padding: theme.spacing(1),
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
  content: {
    padding: theme.spacing(3),
    '& >* h5': {
      letterSpacing: theme.spacing(0.3),
      fontWeight: 'bold',
    },
  },
  details: {
    [theme.breakpoints.up('sm')]: {
      '& p': {
        paddingRight: theme.spacing(4),
      },
    },
  },
  extras: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > * ': {
        width: '33.33%',
      },
    },
  },
}));

export default function SingleRoom(props) {
  const classes = useStyles();
  const context = useContext(RoomContext);
  const { getRoom } = context;
  const slug = props.match.params.roomType;
  const room = getRoom(slug);

  // Scroll page to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!room) {
    return (
      <Hero hero="roomsHero">
        <Banner title="Room not available">
          <Link className={classes.button} to="/rooms">
            back to rooms
          </Link>
        </Banner>
      </Hero>
    );
  }
  const {
    breakfast,
    capacity,
    description,
    extras,
    images,
    name,
    pets,
    price,
    size,
  } = room;

  return (
    <>
      <Hero hero="roomsHero" image={images[0]}>
        <Banner title={`${name} room`}>
          <Link className={classes.button} to="/rooms">
            back to rooms
          </Link>
        </Banner>
      </Hero>
      <Paper className={classes.paper} variant="outlined" square>
        <GridList className={classes.gridList} cols={2.5}>
          {images.map((image) => (
            <GridListTile key={image}>
              <img src={image} alt={image} />
            </GridListTile>
          ))}
        </GridList>
      </Paper>
      <Container>
        <Grid className={classes.content} container spacing={3}>
          <Grid className={classes.details} item xs={12} sm={6}>
            <Typography variant="h5">Details</Typography>
            <Box component="p" lineHeight={2} letterSpacing={1}>
              {description}
            </Box>
          </Grid>
          <Grid className={classes.info} item xs={12} sm={6}>
            <Typography variant="h5">Info</Typography>
            <Box letterSpacing={3} component="p">
              Price: ${price}
            </Box>
            <Box letterSpacing={3} component="p">
              Size: {size} SQFT
            </Box>
            <Box letterSpacing={3} component="p">
              Max Capacity:{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </Box>
            <Box letterSpacing={3} component="p">
              {pets ? 'Pets Allowed' : 'No Pets Allowed'}
            </Box>
            <Box letterSpacing={3} component="p">
              {breakfast && 'Free breakfast included'}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Extras</Typography>
            <List className={classes.extras}>
              {extras.map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
