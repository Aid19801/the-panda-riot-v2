import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NavigationAuth from './nav-auth';
import NavigationNonAuth from './nav-non-auth';
import './styles.css';

// if signed in, one nav bar, if NOT signed in, a different one...
const Navigation = ({ isAdmin, isSignedIn, firebase }) => (
  <div className="nav-container">
    { isSignedIn ? (
      <NavigationAuth isAdmin={isAdmin} firebase={firebase} />
    ) : (
      <NavigationNonAuth />
    )}
  </div>
);

const mapStateToProps = state => ({
  isSignedIn: state.signIn.isSignedIn,
  isAdmin: state.signIn.isAdmin
});

export default compose(
  // withFirebase,
  connect(
    mapStateToProps,
    null
  )
)(Navigation);
