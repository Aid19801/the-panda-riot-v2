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
            title: `Comedians Will Not Be Allowed To Discuss Govt Response To Covid-19`,
            description: `Free speech fears as Home Secretary announces measures to curb artistic licence 'in case it upsets grieving families'`,
            images: [
              {
                // url: 'https://hosting.photobucket.com/images/mm187/AidThompsin/flop.jpg',
                url: 'https://i.guim.co.uk/img/static/sys-images/Arts/Arts_/Pictures/2014/9/5/1409919217507/Taking-it-seriously---Ste-011.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=284f750c05c5d9c849b231acf8235f3a',
                width: 800,
                height: 600,
                alt: 'Og Image Alt'
              },
              {
                url: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/22/1434971591335/0d5323f2-0d0f-45ae-93e2-0e0325484f78-2060x1236.jpeg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=09664af05d4be788de436f72814661da',
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
