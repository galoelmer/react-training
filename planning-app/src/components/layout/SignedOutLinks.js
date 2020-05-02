import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <div className="right menu">
      <NavLink className="item" to="/a">
        Signup
      </NavLink>
      <NavLink className="item" to="/b">
        Login
      </NavLink>
    </div>
  );
};

export default SignedOutLinks;
