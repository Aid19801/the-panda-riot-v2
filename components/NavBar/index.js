import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import NavigationAuth from './nav-auth';
import NavigationNonAuth from './nav-non-auth';
import Bulletin from '../Bulletin';
import { withFirebase } from '../../HOCs';
import './styles.css';
import { fetchGigsTonight } from '../../redux/actions';

// if signed in, one nav bar, if NOT signed in, a different one...
const Navigation = ({ gigsTonight, updateStatefetchGigsTonight, isAdmin, isSignedIn, firebase }) => {
  
  useEffect(() => {
    updateStatefetchGigsTonight();
  }, []);

  return (
    <div className="nav-container">
      { isSignedIn ? (
        <NavigationAuth isAdmin={isAdmin} firebase={firebase} />
      ) : (
        <NavigationNonAuth />
      )}
      { gigsTonight && <Bulletin stories={gigsTonight} /> }      
    </div>
  );
} 

const mapStateToProps = state => ({
  isSignedIn: state.signIn.isSignedIn,
  isAdmin: state.signIn.isAdmin,
  gigsTonight: state.gigs.gigsTonight,
});

const mapDispatchToProps = dispatch => ({
  updateStatefetchGigsTonight: () => dispatch(fetchGigsTonight()),
})

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps),
)(Navigation);
