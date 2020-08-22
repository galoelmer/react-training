import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, withTheme } from '@material-ui/core/styles';

// Material UI components
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextFiled from '@material-ui/core/TextField';

// Redux
import { connect } from 'react-redux';
import { submitComment, clearErrors } from '../../redux/actions/dataActions';

const styles = {};

class CommentForm extends Component {
  state = {
    body: '',
    errors: {},
  };

  static getDerivedStateFromProps(props, state) {
    if (props.UI.errors) {
      return {
        errors: props.UI.errors,
      };
    } else {
      return {
        errors: {},
      };
    }
  }

  handleChange = (event) => {
    if (event.target.value.length === 1) this.props.clearErrors();
    this.setState({ [event.target.name]: event.target.value, errors: {} });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitComment(this.props.screamId, { body: this.state.body });
    this.setState({ body: '' });
  };

  render() {
    const { classes, authenticated, theme } = this.props;
    const { errors } = this.state;

    const commentFormMarkup = authenticated ? (
      <Grid item sm={12} style={{ textAlign: 'center' }}>
        <form onSubmit={this.handleSubmit}>
          <TextFiled
            name="body"
            type="text"
            label="Comment on scream"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.body}
            onChange={this.handleChange}
            fullWidth
            style={theme.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
        <hr style={theme.visibleSeparator} />
      </Grid>
    ) : null;

    return commentFormMarkup;
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  screamId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps, { submitComment, clearErrors })(
  withStyles(styles)(withTheme(CommentForm))
);
