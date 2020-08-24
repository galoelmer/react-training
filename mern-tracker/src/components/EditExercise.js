import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CreateExercise(props) {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = React.useState(false);
  const {
    match: {
      params: { id },
    },
    history,
  } = props;

  useEffect(() => {
    axios.get(`http://localhost:5000/exercises/${id}`).then((res) => {
      setUsername(res.data.username);
      setDescription(res.data.description);
      setDuration(res.data.duration);
      setDate(res.data.date);
    });
  }, [id]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setSuccess(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !description || !duration || !date) {
      setError(true);
      setOpen(true);
      return;
    }
    const data = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post(`http://localhost:5000/exercises/update/${id}`, data)
      .then((res) => {
        console.log(res.data);
        history.push('/');
      })
      .catch((err) => {
        setError(true);
        setOpen(true);
        console.log(err);
      });
  };

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5">
          Update Exercise Log
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <FormControl className={classes.formControl} noValidate>
            <TextField
              fullWidth
              multiline
              disabled
              variant="outlined"
              margin="normal"
              label="Username"
              value={username}
            />
          </FormControl>
          <FormControl className={classes.formControl} noValidate>
            <TextField
              fullWidth
              multiline
              error={error && !description}
              helperText={error ? 'Required' : ''}
              variant="outlined"
              margin="normal"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              inputProps={{
                name: 'description',
                id: 'description',
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl} noValidate>
            <TextField
              fullWidth
              multiline
              type="number"
              variant="outlined"
              margin="normal"
              label="Duration (in minutes)"
              value={duration}
              error={error && !duration}
              helperText={error ? 'Required' : ''}
              onChange={(e) => setDuration(e.target.value)}
              inputProps={{
                name: 'duration',
                id: 'duration',
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl} noValidate>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                autoOk
                disableFuture
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date"
                maxDate={new Date('2022-01-01')}
                value={date}
                onChange={(date) => setDate(date)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update Log
          </Button>
        </form>
        {success && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert variant="filled" onClose={handleClose} severity="success">
              Exercise Log Created Successfully
            </Alert>
          </Snackbar>
        )}
        {!success && (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert variant="filled" onClose={handleClose} severity="error">
              Something went wrong!
            </Alert>
          </Snackbar>
        )}
      </Paper>
    </Container>
  );
}
