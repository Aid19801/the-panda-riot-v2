import React from 'react';
import Link from 'next/link';
import './styles.css';

export default function MoreInfoCard({ paneInfo }) {
  return (
    <div className="gigs__more-info-container tpr__border flex-center">
      <div className="gigs__flex-row">
        <div className="gigs__flex-col">
          <h4>{paneInfo.bringer ? 'Bringer!' : 'Not A Bringer!'}</h4>
        </div>
        <div className="gigs__flex-col">
          <h4>{paneInfo.walkins ? 'They Do Walk-Ins!' : 'No Walk-ins'}</h4>
        </div>
      </div>

      <div className="gigs__flex-row">
        <div className="gigs__flex-col">
          <Link href={`${paneInfo.website}`}>
            <a target="_blank">
              <h4>
                Website
              </h4>
            </a>
          </Link>
        </div>
        <div className="gigs__flex-col">
          <h4 onClick={() => Router.push(`${paneInfo.howToBook}`)}>
            How To Book
          </h4>
        </div>
      </div>

      <div className="gigs__flex-row">
        <div className="gigs__flex-col">
          <h4>Nearest Tube: {paneInfo.nearestTubes[0]}</h4>
        </div>
        <div className="gigs__flex-col">
          <h4>Venue: {paneInfo.venue}</h4>
        </div>
      </div>
    </div>
  );
}
