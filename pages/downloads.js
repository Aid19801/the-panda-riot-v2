import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter, withRouter } from 'next/router'
import withPage from '../HOCs/with-page';
import Link from 'next/link';


function Downloads(props) {

    return (
        <React.Fragment>

            <NextSeo
                title="The Panda Riot | APPS"
                description="Find gigs using London's favourite Open Mic Comedy app"
                openGraph={{
                    type: 'website',
                    url: 'https://www.thePandaRiot.com',
                    title: `The Panda Riot Gigs Map`,
                    description: 'Sign in to the panda riot open mic comedy webapp!',
                    images: [
                        {
                            url: 'https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt'
                        },
                        {
                            url:
                                'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt 2'
                        }
                    ]
                }}
            />

            <div className="container">
                <div className="row margin-top flex-center">

                    <div className="col-sm-12 flex-center margin-bottom">
                        <h1>Get The App!</h1>
                    </div>
                    
                    <div className="col-sm-6">
                        <Link href="/downloads/mac">
                            <a>
                                MAC DL
                            </a>
                        </Link>
                    </div>
                    
                    <div className="col-sm-6">
                        <Link href="/downloads/pc">
                            <a>
                                PC DL
                            </a>
                        </Link>
                    </div>


                    <div className="col-sm-6">
                        <p>Download PC</p>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
}
export default compose(
    withRouter,
    withPage,
)(Downloads);