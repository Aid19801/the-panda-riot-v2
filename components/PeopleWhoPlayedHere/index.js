import React from 'react';
import Link from 'next/link'
import './styles.css';

function PeopleWhoPlayedHere({ people }) {
    return (
        <div className="gigs__more-info-container container tpr__border flex-center padding-on">
            <p>Who's Played Here</p>
            <div className="selectedGig__ppl-played-here w-100 row">
                {people && people.length !== 0 && people.map((each, i) => {
                    return (
                        <>
                            <Link href={`/acts/${each.uid}`}>
                                <a>
                                    <img key={i} src={each.profilePicture} alt="person who played at gig" />
                                </a>
                            </Link>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default PeopleWhoPlayedHere;