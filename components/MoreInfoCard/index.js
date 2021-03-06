import React from 'react';
import Link from 'next/link';
import * as icons from './icons';

import './styles.css';
import CircleImage from '../CircleImage';

export default function MoreInfoCard({ paneInfo, isGigs, isAttendees }) {
  return (
    <div className="gigs__more-info-container tpr__border flex-center padding-on">
      <div className="gigs__flex-row">

        { isGigs ? (
        <>  
          <div className="moreinfo__each-row skew-right orange">
            
            { paneInfo.bringer ? (
              <div className="rounded-corners flex-col">
                <icons.BringerIcon />
              </div>
            ) : null
          }
            <h4>{paneInfo.bringer ? 'Bringer!' : 'Not A Bringer!'}</h4>
          </div>
          <div className="moreinfo__each-row skew-right orange">
            <icons.WalkinsIcon />
            <h4>{paneInfo.walkins ? 'They Do Walk-Ins!' : 'No Walk-ins'}</h4>
          </div>
        </>
        ) : (
          <div />
        )}

      </div>

      <div className="gigs__flex-row">
        <div className="moreinfo__each-row skew-left orange">
          <icons.LaptopIcon />
          <Link href={paneInfo.website}>
            <a target="_blank">
              <h4>Website</h4>
            </a>
          </Link>
        </div>
        <div className="moreinfo__each-row skew-right orange">
          <icons.PrebookIcon />
          <Link href={paneInfo.howToBook}>
            <a target="_blank">
              <h4>How To Book</h4>
            </a>
          </Link>
        </div>
      </div>

      <div className="gigs__flex-row">
        <div className="moreinfo__each-row skew-left orange">
          <icons.TubeIcon />
          <h4>{paneInfo.nearestTubes[0]}</h4>
        </div>
        <div className="moreinfo__each-row skew-right orange">
          <icons.VenueIcon />
          <h4>{paneInfo.venue}</h4>
        </div>
      </div>


    </div>
  );
}
