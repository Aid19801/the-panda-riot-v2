import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Button } from '..';
import { addUserToGig } from '../../redux/actions';
import { getFromCache, clearFromCache } from '../../lib/cache';
import './styles.css';
import { withFirebase } from '../../HOCs';


function HaveIPlayedHere({ firebase, gig, updateStateAddUserToGig}) {

  const [showElement, toggleShowElement] = useState(false);
  const [haveIPerformed, setHaveIPerformed] = useState(false);
  const uid = getFromCache('uid');

  useEffect(() => {
    setHaveIPerformed(false);
    if (!showElement) toggleShowElement(true);
    const arr = gig.attended;

    if (arr) {
      arr.map((each) => {
        if (each.uid === uid) {
          setHaveIPerformed(true);
        }
      });
    } else {
      setHaveIPerformed(false);
    }
  }, [gig])

  const handleYes = () => {
    // pass uid, name, pic to redux => saga => update gist.
    const json = getFromCache('user-profile-object');
    const user = JSON.parse(json);
    // pass both user's acc info {},
    // uid
    // and the gig we're updating => to saga for gist.
    updateStateAddUserToGig(user, uid, gig);
    localAddGigToUser();

    setHaveIPerformed(!haveIPerformed);
    clearFromCache('gigs');
  };

  const localAddGigToUser = () => {
    // console.log('foo');
    firebase.user("seVFOFwaXJh8z20Mx6vdmut7SuI2").on('value', snapshot => {
      let faveGig = '';
      let em = '';
      let genre = '';
      let youtube = '';
      let twitter = '';
      let facebook = '';
      let tl = '';
      let youtubeChannelURL = '';
      let website = '';
      let pp = '';
      let updatedGigsAttended = [];
      let attended = [];

      const user = snapshot.val();
      // console.log('user is ', user);
      const {
        username,
        rating,
        includeInActRater,
      } = user;

      user && !user.profilePicture
        ? (pp = '/static/no_prof_pic.png')
        : (pp = user.profilePicture);
      user && !user.email ? (em = 'unknown@dunno.com') : (em = user.email);
      user && !user.faveGig ? (faveGig = 'n/a') : (faveGig = user.faveGig);
      user && !user.genre ? (genre = 'unknown') : (genre = user.genre);

      user && !user.tagline ? (tl = 'i dont have a tagline!') : (tl = user.tagline);

      user && !user.youtube ? (youtube = 'unknown') : (youtube = user.youtube);
      user && !user.twitter ? (twitter = 'unknown') : (twitter = user.twitter);
      user && !user.facebook
        ? (facebook = 'unknown')
        : (facebook = user.facebook);
      user && !user.youtubeChannelURL
        ? (youtubeChannelURL = 'unknown')
        : (youtubeChannelURL = user.youtubeChannelURL);
      user && !user.website ? (website = 'unknown') : (website = user.website);
      user && !user.attended ? updatedGigsAttended = [] : updatedGigsAttended = user.attended;
      updatedGigsAttended.push({ id: gig.id, img: gig.img, name: gig.heading }); 

      let includeInActRaterStatus = includeInActRater || false;
      let persistRatingFromDb = rating !== 0 && rating ? rating : 0;

      // console.log('user')
      firebase.user("seVFOFwaXJh8z20Mx6vdmut7SuI2").set({
        username,
        email: em,
        tagline: tl,
        profilePicture: pp,
        includeInActRater: includeInActRaterStatus,
        rating: persistRatingFromDb,
  
        faveGig,
        genre,
        youtube,
        twitter,
        facebook,
        youtubeChannelURL,
        website,
        attended: updatedGigsAttended,
      });
      event.preventDefault();
    })
  }

  const handleNo = () => toggleShowElement(false);

  if (showElement) {
    return (
      <div
        className={
          haveIPerformed
            ? `gigs__have-i-played-here-container __yes hidden`
            : `gigs__have-i-played-here-container __no hidden`
        }
      >
        <img 
          src="/static/audience.jpg"
          className="gigs__have-i-bg"
          alt="live comedy audience"
          />

        <div style={{ position: 'relative' }}>
          <h4 className="margin-off">Have You Recently Performed Here?</h4>
        </div>
        <div className="flex-row space-evenly">
          <Button
            text="Yes"
            color={haveIPerformed ? 'green' : 'grey'}
            onClick={handleYes}
          />
          <Button text="No" color="grey" onClick={handleNo} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="gigs__have-i-played-here-container __no fadeOut hidden">
        <img src="/static/audience.jpg" className="gigs__have-i-bg" alt="alternative comedy audience" />
        <div style={{ position: 'relative', zIndex: '70' }}>
          <h4 className="margin-off">Have You Recently Performed Here?</h4>
        </div>

        <div className="flex-row">
          <Button
            text="Yes"
            disabled={true}
            color={haveIPerformed ? 'green' : 'grey'}
            onClick={handleYes}
          />
          <Button text="No" color="grey" onClick={handleNo} />
        </div>
        <p className="white">^^ Coming Soon in Desktop App version! ^^</p>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loading: state.addUserToGig.loading,
});


const mapDispatchToProps = dispatch => ({
  updateStateAddUserToGig: (user, uid, gig) => dispatch(addUserToGig(user, uid, gig)),
  // updateStateAddGigToUser: (uid, gigId) => dispatch(addGigToUser(uid, gigId)),
});

export default compose(
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(HaveIPlayedHere);
