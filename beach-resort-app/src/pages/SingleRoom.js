import React, { useContext } from 'react';
// import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
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
  const slug = props.match.params.roomType;
  const { getRoom } = context;
  const room = getRoom(slug);
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
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
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
            <Box component='p' lineHeight={2} letterSpacing={1}>{description}</Box>
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
