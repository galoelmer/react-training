import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Material UI Components
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';

const styles = {
  form: {
    textAlign: 'center',
  },
  icon: {
    fontSize: 50,
    color: '#0286c2',
  },
  textField: {
    marginTop: '20px',
  },
  button: {
    margin: '25px 0 15px',
  },
  customError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '10px',
  },
};

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
      loading: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('/login', userData)
      .then((res) => {
        console.log(res.data);
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log('ERRORRRRR: ', err.response);
        this.setState({ errors: err.response.data, loading: false });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;

    return (
      <Grid container className={classes.form} justify="center">
        <Grid item xs={11} sm={4}>
          <AccountCircleTwoToneIcon className={classes.icon} />
          <Typography variant="h4">Login</Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={25} className={classes.spinner} />
              ) : (
                'Login'
              )}
            </Button>
            <br />
            <Box component="small">
              Don't have an account? Sign up <Link to="/signup">here</Link>
            </Box>
          </form>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
