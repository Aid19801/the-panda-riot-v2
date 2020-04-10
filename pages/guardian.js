import React, { Component } from 'react';
import { NextSeo } from 'next-seo';
import * as cache from '../lib/cache';
import '../lib/index.css';
// import { analyticsPage } from '../lib/utils';

class GuardianPage extends Component {
  constructor() {
    super();
    this.state = {
      gigs: [],
      filteredGigs: [],
      finalGigs: [],
      toggleMarker: false,
      loading: false
    };
  }
  static async getInitialProps({ reduxStore, req }) {
    //   reduxStore.dispatch(gotGigsFromGist(sortedGigs));
    return {
      foo: []
    };
  }

  async componentDidMount() {
  }

  render() {
    const { selectedGig, spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }

    return (
      <React.Fragment>
        <NextSeo
          title="Comedians Will Not Be Allowed To Discuss Govt Response To Covid-19"
          description="Free speech fears as Home Secretary announces measures to curb artistic licence 'in case it upsets grieving families'"
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/guardian',
            title: `open graph title bit`,
            description: 'open graph descriptiopn bit',
            images: [
              {
                url: 'https://hosting.photobucket.com/images/mm187/AidThompsin/foo(1).jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt'
              },
              {
                url: 'https://hosting.photobucket.com/images/mm187/AidThompsin/foo(1).jpg',
                width: 800,
                height: 600,
                alt: 'Og Image Alt 2'
              }
            ]
          }}
        />

        <div className="container">
          <div className="row margin-top flex-center">
            guardian bit
          </div>
          
          <div className="row full-width">
            <div className="col-sm-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default GuardianPage;
