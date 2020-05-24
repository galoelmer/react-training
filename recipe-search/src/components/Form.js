import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';

const Form = () => {
  return (
    <form>
      <Grid container alignItems="center" justify="center">
        <TextField margin="normal" placeholder="Search" />
        <Button size="small" variant="contained" color="secondary">
          Search
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
