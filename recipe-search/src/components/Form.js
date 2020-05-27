import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

const Form = ({ getRecipe, inputRef, inputError }) => {
  return (
    <form onSubmit={getRecipe} style={{ margin: 15 }} noValidate>
      <Grid container alignItems="center" justify="center">
        <TextField
          inputRef={inputRef}
          autoFocus
          label="Type ingredient"
          type="text"
          name="recipeName"
          error={inputError}
          helperText={inputError ? "Recipe not found" : null}
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
