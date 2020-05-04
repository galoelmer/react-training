import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
      console.log(e);
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui padded four column centered grid">
        <div className="column aligned center">
          <h2 className="ui inverted header">
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui form">
            <div className="ui stacked segment">
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
            </div>

            <div className="ui error message"></div>
          </form>

          <div className="ui message">
            New to us? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
