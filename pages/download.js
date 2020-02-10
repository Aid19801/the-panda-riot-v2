import React, { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useRouter, withRouter } from 'next/router'
import withPage from '../HOCs/with-page';
// import MacInstaller from '../installers/The Panda Riot-1.0.1.dmg'


function Download(props) {

    console.log('AT | props :', props);
    
    return (
        <React.Fragment>

            <div className="container">
                <div className="row margin-top flex-center">

                Download
                </div>
            </div>


        </React.Fragment>
    );
}
export default compose(
    withRouter,
    withPage,
)(Download);