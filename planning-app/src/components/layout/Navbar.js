import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <div className="ui container">
      <div className="ui menu">
        <Link className="item" to="/">
          Planing App
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </div>
  );
};

export default Navbar;
