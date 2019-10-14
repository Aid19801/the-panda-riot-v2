import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '..';
import { addUserToGig } from '../../redux/actions';
import * as cache from '../../lib/cache';

import './styles.css';

function HaveIPlayedHere({ gig, updateStateAddUserToGig}) {
  const [showElement, toggleShowElement] = useState(true);
  const [haveIPerformed, setHaveIPerformed] = useState(false);

  // handleClick takes the click, gig, updates state for UI color change
  const handleClick = () => {
    
    // get user id, name & profile pic
    const uid = cache.getFromCache('uid');
    const json = cache.getFromCache('user-profile-object');
    const user = JSON.parse(json);
    console.log('AT | user ', user);
    // pass both user, uid & gig to saga for gist.
    updateStateAddUserToGig(user, uid, gig);

    setHaveIPerformed(!haveIPerformed);
  };
  const handleNo = () => toggleShowElement(false);

  if (showElement) {
    return (
      <div
        className={
          haveIPerformed
            ? `gigs__have-i-played-here-container __yes`
            : `gigs__have-i-played-here-container __no`
        }
      >
        <img src="/static/audience.jpg" className="gigs__have-i-bg" />

        <div style={{ position: 'relative' }}>
          <h4 className="margin-off">Have You Recently Performed Here?</h4>
        </div>
        <div className="flex-row">
          <Button
            text="Yes"
            color={haveIPerformed ? 'green' : 'grey'}
            onClick={handleClick}
          />
          <Button text="No" color="grey" onClick={handleNo} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="gigs__have-i-played-here-container __no fadeOut">
        <img src="/static/audience.jpg" className="gigs__have-i-bg" />
        <div style={{ position: 'relative' }}>
          <h4 className="margin-off">Have YOU Performed Here?</h4>
        </div>

        <div className="flex-row">
          <Button
            text="Yes"
            color={haveIPerformed ? 'green' : 'grey'}
            onClick={handleClick}
          />
          <Button text="No" color="grey" onClick={handleNo} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateStateAddUserToGig: (user, uid, gig) => dispatch(addUserToGig(user, uid, gig))
});

export default connect(
    null,
  mapDispatchToProps
)(HaveIPlayedHere);
