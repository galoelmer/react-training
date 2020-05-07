import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { authError } = this.props;
    return (
      <div className="ui padded four column centered grid">
        <div className="column aligned center">
          <h2 className="ui inverted header">
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui form error">
            <div className="ui raised segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
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
              <div
                onClick={this.handleSubmit}
                className="ui fluid large teal submit button"
              >
                Login
              </div>

              <div className="ui error message">
                {authError ? <p>Login Failed</p> : null}
              </div>
            </div>
          </form>

          <div className="ui message">
            New to us? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
