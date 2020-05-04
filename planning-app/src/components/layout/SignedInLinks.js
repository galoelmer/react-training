import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <div className="right menu">
      <NavLink className="item" to="/create">
        New Project
      </NavLink>
      <NavLink className="item" to="/">
        Log Out
      </NavLink>
      <div className="item">
        <NavLink className="circular ui icon button" to="/">
          EC
        </NavLink>
      </div>
    </div>
  );
};

export default SignedInLinks;
