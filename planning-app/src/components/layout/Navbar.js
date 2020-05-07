import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  console.log(props);
  const { auth } = props;
  return (
    <div className="ui container">
      <div className="ui menu">
        <Link className="ui medium teal header item" to="/">
          Planing App
        </Link>
        {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
