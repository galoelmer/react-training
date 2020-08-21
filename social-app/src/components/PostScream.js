import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTheme } from '@material-ui/core/styles';
import MyButton from '../util/MyButton';

// Redux
import { connect } from 'react-redux';
import { postScream, clearErrors } from '../redux/actions/dataActions';

// Material UI components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  submitButton: {
    position: 'relative',
  },
  progressSpinner: {
    position: 'absolute',
  },
  closeButton: {
    position: 'absolute',
    left: '90%',
    top: '10%',
  },
};

class PostScream extends Component {
  state = {
    open: false,
    body: '',
    errors: {},
  };

  static getDerivedStateFromProps(props, state) {
    if (props.UI.errors) {
      return {
        errors: props.UI.errors,
      };
    }
    if (!props.UI.errors && props.UI.loading && state.body) {
      return {
        body: '',
        open: false,
        errors: {},
      };
    }
    // Return null to indicate no change to state.
    return null;
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.clearErrors();
    this.setState({ open: false, errors: {} });
  };

  handleChange = (event) => {
    this.props.clearErrors();
    this.setState({ [event.target.name]: event.target.value, errors: {} });
  };

  handleSubmit = (event) => {
    this.props.postScream({ body: this.state.body });
    event.preventDefault();
  };

  render() {
    const { errors } = this.state;
    const {
      classes,
      theme,
      UI: { loading },
    } = this.props;
    return (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Post a Scream!">
          <AddIcon />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle>Post a new scream</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="body"
                type="text"
                label="SCREAM!!"
                multiline
                rows="3"
                placeholder="Scream at your fellow screamers"
                error={errors.body ? true : false}
                helperText={errors.body}
                style={theme.textField}
                onChange={this.handleChange}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={theme.button}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

PostScream.propTypes = {
  postScream: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { postScream, clearErrors })(
  withStyles(styles)(withTheme(PostScream))
);
