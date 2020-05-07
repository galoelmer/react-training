import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  return (
    <div className="ui container">
      <div className="ui menu">
        <Link className="ui medium teal header item" to="/">
          Planing App
        </Link>
        {auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
