import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="ui padded four column centered grid">
        <div className="column aligned center">
          <h2 className="ui inverted header">
            <div className="content">Sign Up</div>
          </h2>
          <form className="ui error form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="at icon"></i>
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail address"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    id="firstName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    id="lastName"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div
                onClick={this.handleSubmit}
                className="ui fluid large teal submit button"
              >
                Sign Up
              </div>
            </div>

            <div className="ui error message">
              {authError ? <p>{authError}</p> : null}
            </div>
          </form>

          <div className="ui message">
            Already have an account? <Link to="/signin">Sign In</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
