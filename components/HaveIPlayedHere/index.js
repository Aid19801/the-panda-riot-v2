import React, { useState } from 'react';
import { Button } from '..';
import './styles.css';

function HaveIPlayedHere({ gig }) {
  const [haveIPerformed, setHaveIPerformed] = useState(false);

  const handleClick = () => setHaveIPerformed(!haveIPerformed);

  return (
    <div
      className={
        haveIPerformed
          ? `gigs__have-i-played-here-container __yes`
          : `gigs__have-i-played-here-container __no`
      }
    >
      <img src="/static/audience.jpg" className="gigs__have-i-bg" />

      <div>
        <h4>Have You Performed Here?</h4>
      </div>
      <div className="flex-row">
        <Button
          text="Yes"
          color={haveIPerformed ? 'green' : 'grey'}
          onClick={handleClick}
        />
        <Button text="No" color="grey" onClick={handleClick} />
      </div>
    </div>
  );
}

export default HaveIPlayedHere;
