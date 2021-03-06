import React from 'react';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import { startApp, updateStateAppLoaded, updateStateAppLoading } from '../redux/actions';
import Fade from 'react-reveal/Fade';
import { ProfilePic, Spinner } from '../components';
import withAnalytics from '../HOCs/with-ga';
import withFunding from '../HOCs/with-funding';
import mockGigs from '../lib/mock-gigs.json';
import { compose } from 'redux';
import Link from 'next/link';
import Head from 'next/head';

import '../lib/index.css';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      gigs: null
    };
  }

  componentDidMount() {
    const { updateStateStartApp, updateStateAppLoaded } = this.props;
    updateStateStartApp();
    this.handleGigsArray();
    updateStateAppLoaded()
  }

  handleGigsArray = () => {
    const arr = mockGigs;

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    let trim = arr.slice(0, 14);

    let shuffled = shuffle(trim);

    this.setState({ gigs: shuffled });
  };

  render() {
    const { gigs } = this.state;

    const { spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }

    return (
      <div>
        <NextSeo
          title="The Panda Riot | Open Mic Comedy in London"
          description="London's electric Open Mic Comedy Circuit - all in one handy, modern web-app!"
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/guardian',
            title: 'The Panda Riot',
            description:
              "The go-to web-app for London's electric open mic comedy circuit.",
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

        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg" />
          <meta name="twitter:creator" content="@aidThompsin" />
          <meta name="twitter:site" content="@thePandaRiot" />
        </Head>

        <div className="faux-nav">
          <div style={{ height: '100%' }}>
            <p>The Panda Riot</p>
          </div>
        </div>

        <div className="landing__downloads__promo">

          <Link href="/downloads">
            <a>
              <p className="orange center black bold">👨🏻‍💻 Download the Desktop app? 👨🏻‍💻</p>
            </a>
          </Link>
          <a href="https://www.patreon.com/thePandaRiot?fan_landing=true" target="_blank"><p className="orange center black bold">🍺 Buy Me A Beer? 🍺</p></a>
        </div>

        <Link href="/signin">
          <a>
            <div className="parallax">
              <div className="hns9">
                <h1>Open Mic Starts Here!</h1>
              </div>

              <div className="container">
                <div className="row flex-center">
                  <Fade>
                    <div className="col-md-4 margin-top margin-bottom">
                      <div className="landing__promo-box tpr__border flex-center flex-col padding-on black-gradient">
                        <h3 className="orange center black">WTF IS THIS!?!</h3>
                        <p className="white center">
                          Everything you need to enjoy & endure London's electric
                          Open Mic comedy circuit!
                        </p>
                        <img
                          alt="comedy masks"
                          className="landing__promo-box-icon"
                          src="/static/masks.svg"
                        />
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className="col-md-4 margin-top margin-bottom">
                      <div className="landing__promo-box tpr__border flex-center flex-col padding-on black-gradient">
                        <h3 className="orange center black">SIGN IN!</h3>
                        <p className="white center">
                          Check out where the latest Bringers & Non Bringers Are
                          On The Filterable Gig Map!
                        </p>
                        <img
                          alt="comedy show locations"
                          className="landing__promo-box-icon"
                          src="/static/location.svg"
                        />
                      </div>
                    </div>
                  </Fade>
                  <Fade>
                    <div className="col-md-4 margin-top margin-bottom">
                      <div className="landing__promo-box tpr__border flex-center flex-col padding-on black-gradient">
                        <h3 className="orange center black">WATCH SETS!</h3>
                        <p className="white center">
                          Catch up on your friends' latest sets, watching their
                          5-spots!
                        </p>
                        <img
                          alt="fottage of comedy sets"
                          className="landing__promo-box-icon"
                          src="/static/video-camera.svg"
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>


              <div className="container-fluid">
                <div className="row w-1oo flex-center black box-shadow margin-off">
                  {gigs &&
                    gigs.map((each, i) => {
                      if (each.img) {
                        return (
                          <>
                            <Fade>
                              <ProfilePic key={i} srcProp={each.img} />;
                              </Fade>
                          </>
                        );
                      }
                    })}
                </div>
              </div>
            </div>

          </a>
        </Link>

        <div
          className="hns9_footer flex-center flex-row orange space-evenly padding-left padding-right margin-top">

          <img
            className="hns9_footer_img"
            onClick={() => window.open('https://twitter.com/thepandariot', '_newtab')}
            src="data:image/png;base64,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" alt="the panda riot twitter "
          />
          <img
            className="hns9_footer_img"
            onClick={() => window.open('https://instagram.com/thepandariot', '_newtab')}
            src="https://i.pinimg.com/originals/c2/81/8c/c2818c6d5d111f61846fbc878bc51b5e.png" alt="the panda riot instagram "
          />
          <img
            className="hns9_footer_img"
            onClick={() => window.open('https://facebook.com/thepandariot', '_newtab')}
            src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png" alt="the panda riot facebook "
          />
          <img
            className="hns9_footer_img"
            onClick={() => window.open('mailto:thePandaRiot@gmail.com', '_newtab')}
            src="https://i-love-png.com/images/1598522_thumb.png" alt="the panda riot email contact"
          />

        </div>

        <div className="flex-col flex-center padding-on">
          <p style={{ color: 'white', fontSize: 25, textAlign: 'center' }}>This website was developed by Aid Thompsin via </p>
          <a style={{ color: 'white' }} href="https://funk27.com">Funk-27</a>
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  updateStateStartApp: () => dispatch(startApp()),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
  updateStateAppLoading: () => dispatch(updateStateAppLoading()),
});

export default compose(
  withAnalytics,
  // withFunding,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(LandingPage);
