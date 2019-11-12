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
  
  const [ location, setLocation ] = useState('');
  const [ hasBulletin , setHasBulletin ] = useState(false);

  useEffect(() => {
    const loc = getCurrentLocation();
    setLocation(loc);
    updateStatefetchGigsTonight();
  }, []);

  const pagesToShowBulletin = ['http://localhost:3000/', 'http://localhost:3000/home', 'http://localhost:3000/signin'];

  useEffect(() => {
    console.log('AT | location has changed: ', location);
    const bool = pagesToShowBulletin.includes(location);
    setHasBulletin(bool);
  }, [location]);

  const getCurrentLocation = () => {
    if (process.browser) {
      return window.location.href;
    }
  }
  return (
    <div className="nav-container">
      { isSignedIn ? (
        <NavigationAuth isAdmin={isAdmin} firebase={firebase} />
      ) : (
        <NavigationNonAuth />
      )}
      {  gigsTonight && <Bulletin stories={gigsTonight} />}

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
