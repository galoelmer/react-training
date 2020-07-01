import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import defaultImg from '../images/room-1.jpeg';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '1.5rem',
    transition: 'all 0.3s linear',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 180,
  },
  priceTop: {
    position: 'absolute',
    top: '0',
    left: '0',
    background: 'rgba(0,0,0,0.8)',
    color: '#fff',
    borderBottomRightRadius: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    padding: '0 0.8rem',

    '& h6': {
      margin: '0',
      padding: '0.4rem',
      fontSize: '0.9rem',
      fontWeight: '300',
      letterSpacing: '3px',
    },

    '& p': {
      paddingBottom: '0.5rem',
      margin: '0',
    },
  },
  roomName: {
    textTransform: 'capitalize',
    color: '#000',
  },
  [theme.breakpoints.up('sm')]: {
    root: {
      margin: '0.5rem',
    },
  },
}));

export default function MediaCard({ room }) {
  const classes = useStyles();
  const { name, images, price, slug } = room;

  return (
    <Card raised className={classes.root}>
      <CardActionArea>
        <Link component={RouterLink} to={`/rooms/${slug}`} underline="none">
          <div className={classes.priceTop}>
            <h6>${price}</h6>
            <p>per night</p>
          </div>
          <CardMedia
            className={classes.media}
            image={images[0] || defaultImg}
            title={name}
          />
          <CardContent>
            <Typography className={classes.roomName} variant="h6">
              {name}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
}
