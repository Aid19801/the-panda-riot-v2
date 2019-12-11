import React from 'react';
import './styles.css';

function PeopleWhoPlayedHere({ people }) {
    return (
        <div className="gigs__more-info-container container tpr__border flex-center padding-on">
            <p>Who's Played Here</p>
        <div className="selectedGig__ppl-played-here w-100 row">
            {people && people.length !== 0 && people.map((each, i) => {
                return <img key={i} src={each.profilePicture} alt="person who played at gig" />
            })}
        </div>
        </div>
    )
}

export default PeopleWhoPlayedHere;