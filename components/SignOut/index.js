import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import * as cache from '../../lib/cache';
import { userIsSignedOut } from '../../redux/actions';
import './styles.css';

const SignOutButton = ({ firebase, updateStateSignedOut }) => {
  const signOutAndClearCache = async () => {
    await cache.clearFromCache('uid');
    await cache.clearFromCache('userProfile');
    await cache.clearFromCache('gigs');
    updateStateSignedOut();
    firebase.doSignOut();
  };

  return (
    <Button
      className="btn__signout"
      variant="warning"
      onClick={() => signOutAndClearCache()}
    >
      Sign Out
    </Button>
  );
};


const mapDispatchToProps = dispatch => ({
  updateStateSignedOut: () => dispatch(userIsSignedOut())
})
export default connect(
  null,
  mapDispatchToProps
)(SignOutButton);
