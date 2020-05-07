import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  console.log(props);
  return (
    <div className="right menu">
      <NavLink className="item" to="/create">
        New Project
      </NavLink>
      <a onClick={props.signOut} href="#!" className="item" to="/">
        Log Out
      </a>
      <div className="item">
        <NavLink className="circular ui icon button" to="/">
          {props.profile.initials ? props.profile.initials : '^_^'}
        </NavLink>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
