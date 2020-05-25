import React from 'react';
import { Button, Grid, Input } from '@material-ui/core';

const Form = ({ getRecipe }) => {
  return (
    <form onSubmit={getRecipe} style={{ margin: 15 }}>
      <Grid container alignItems="center" justify="center">
        <Input
          placeholder="Search"
          name="recipeName"
        />
        <Button
          type="submit"
          size="small"
          variant="contained"
          color="secondary"
        >
          Search
        </Button>
      </Grid>
    </form>
  );
};

export default Form;
