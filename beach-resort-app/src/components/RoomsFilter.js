import React, { useContext } from 'react';
import { RoomContext } from '../context';
import {
  Grid,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  Typography,
  Divider,
  TextField,
  Slider,
  Box,
  Checkbox,
  Chip,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Styling
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3rem 0',
    textAlign: 'center',
  },
  divider: {
    width: '5rem',
    height: '5px',
    margin: '0 auto 1.5rem',
    background: '#af9a7d',
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 150,
    marginTop: '2.5rem',
  },
  slider: {
    width: 250,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      marginTop: '1.5rem',
    },
  },
  checkBoxes: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
  roomSizeInput: {},
}));

// Get all unique values from room types
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const classes = useStyles();
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // Get unique room types
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  types = types.map((item, index) => {
    return (
      <MenuItem key={index} value={item}>
        {item}
      </MenuItem>
    );
  });

  //Get unique room capacity
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return (
      <MenuItem key={index} value={item}>
        {item}
      </MenuItem>
    );
  });

  // Custom Price label format
  function priceLabelFormat(value) {
    return `$${value}`;
  }

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Featured Rooms
      </Typography>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        <Grid item xs={6} md={2}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="select-room-type">Room Type</InputLabel>
            <Select
              labelId="select-room-type"
              id="type"
              value={type}
              onChange={handleChange}
              label="Room Type"
              inputProps={{
                name: 'type',
              }}
            >
              {types}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={2}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="select-guests">Guests</InputLabel>
            <Select
              labelId="select-guests"
              id="capacity"
              label="Guests"
              value={capacity}
              onChange={handleChange}
              inputProps={{
                name: 'capacity',
              }}
            >
              {people}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className={classes.slider}>
            <Box display="flex" justifyContent="space-evenly">
              <Typography id="price-slider" gutterBottom>
                {/* {`Room Price $${price}`} */}
                Room Price
              </Typography>
              <Chip
                size="small"
                label={`$${price}`}
                color="primary"
                variant="outlined"
              />
            </Box>
            <Slider
              id="price"
              name="range"
              valueLabelDisplay="auto"
              aria-labelledby="price-slider"
              step={1}
              value={price}
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
              valueLabelFormat={priceLabelFormat}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            className={classes.roomSizeInput}
            display="flex"
            flexWrap="wrap"
            justifyContent="space-evenly"
          >
            <Typography style={{ width: '100%', marginBottom: '1rem' }}>
              Room Size
            </Typography>
            <TextField
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              label="Min Size Sqft"
              variant="outlined"
              style={{ width: 140 }}
            />
            <TextField
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              label="Max Size Sqft"
              variant="outlined"
              style={{ width: 140 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            className={classes.checkBoxes}
            display="flex"
            justifyContent="space-evenly"
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={breakfast}
                  onChange={handleChange}
                  name="breakfast"
                  id="breakfast"
                />
              }
              label="Breakfast"
            />
            <FormControlLabel
              control={
                <Checkbox checked={pets} onChange={handleChange} name="pets" />
              }
              label="Pets"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
