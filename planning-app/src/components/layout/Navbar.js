import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = () => {
  return (
    <div className="ui container">
      <div className="ui menu">
        <Link className="ui medium teal header item" to="/">
          Planing App
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
}

export default connect(mapStateToProps)(Navbar);
