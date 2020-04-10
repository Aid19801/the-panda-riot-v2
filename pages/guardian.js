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
          title="main title The Guardian | News"
          description="main descr Comedians will be prohibited from talking about or making fun, the Government's response to Covid-19."
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/guardian',
            title: `open graph title bit`,
            description: 'open graph descriptiopn bit',
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
