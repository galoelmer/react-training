import React, { useState } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  formControl: {
    minWidth: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0),
  },
}));

export default function CreateExercise() {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
    };

    console.log(data);

    axios
      .post('http://localhost:5000/users/add', data)
      .then((res) => {
        if (res.data.name === 'MongoError' && res.data.code === 11000) {
          setError('Username already exist');
          throw new Error(JSON.stringify(res.data));
        } else {
          setUsername('');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5">
          Create New User
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <FormControl className={classes.formControl} noValidate>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              label="Username"
              value={username}
              error={error ? true : false}
              helperText={error}
              onChange={(e) => {
                setError(null);
                setUsername(e.target.value);
              }}
            />
          </FormControl>

          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create User
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
