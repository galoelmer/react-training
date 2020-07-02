import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import defaultBcg from '../images/defaultBcg.jpeg';
import room2 from '../images/room-2.jpeg';

const useStyles = makeStyles({
  defaultHero: props =>({
    minHeight: 'calc(100vh - 66px)',
    background: `url(${props.image || defaultBcg}) center/cover no-repeat`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  roomsHero: {
    minHeight: '60vh',
    background: `url(${room2}) center/cover no-repeat`,
  },
});

export default function Hero({ defaultHero, image, children }) {
  const props = {image};
  const classes = useStyles(props);
  return (
    <header
      className={clsx([classes.defaultHero], {
        [classes.roomsHero]: !defaultHero,
      })}
    >
      {children}
    </header>
  );
}
