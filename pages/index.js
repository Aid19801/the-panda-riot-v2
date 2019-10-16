import React from 'react';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import { startApp } from '../redux/actions';
import Fade from 'react-reveal/Fade';
import { NavBar, FunkyTitle, Banner, ProfilePic } from '../components';
import withAnalytics from '../HOCs/with-ga';
import mockGigs from '../lib/mock-gigs.json';
// import { analyticsPage } from '../lib/utils';
import { compose } from 'redux';
import Link from 'next/link';
class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      gigs: null
    };
  }

  componentDidMount() {
    const { updateStateStartApp } = this.props;
    updateStateStartApp();
    this.handleGigsArray();
    // analyticsPage('v2-landing-page');
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

    return (
      <div id="page-container" className="landing__page">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: 'The Panda Riot.',
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

        <NavBar />
        <Banner src="/static/banner-ldn.jpg" />
        <Link href="/signin">
          <a className="landing__clicker">
            <div className="container">
              <div className="row margin-top">
                <FunkyTitle text="Open Mic Starts Here!" />
              </div>

              <div className="row margin-top margin-bottom">
                <Fade>
                  <div className="col-md-4 margin-top margin-bottom">
                    <div className="landing__promo-box tpr__border flex-center flex-col padding-on black-gradient">
                      <h3 className="orange center black">WTF IS THIS!?!</h3>
                      <p className="white center">
                        Everything you need to enjoy & endure London's electric
                        Open Mic comedy circuit!
                      </p>
                      <img
                        className="landing__promo-box-icon"
                        src="/static/masks.svg"
                      />
                    </div>
                  </div>
                </Fade>

                <Fade>
                  <div className="col-md-4 margin-top margin-bottom">
                    <div className="landing__promo-box tpr__border flex-center flex-col padding-on black-gradient">
                      <h3 className="orange center black">FIND GIGS!</h3>
                      <p className="white center">
                        Check out where the latest Bringers & Non Bringers Are
                        On The Filterable Gig Map!
                      </p>
                      <img
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

            <div className="container margin-top">
              <div className="row margin-top">
                <div className="jumbotron w-100 landing__jumbotron rounded-corners tpr__border orange-gradient">
                  <div className="flex-col">
                    <Fade>
                      <h1 className="landing__jumbo-title flex-center grey">
                        Totally Free
                      </h1>
                    </Fade>

                    <div className="landing__screens-container">
                      <Fade>
                        <div className="landing__screen-container skew-right">
                          <img
                            src="/static/screen_map.png"
                            height={400}
                            width={500}
                          />
                        </div>
                      </Fade>
                      <div className="landing__screen-container skew-left">
                        <img
                          src="/static/screen_acts.png"
                          height={500}
                          width={250}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row margin-top box-shadow black">
                <Fade>
                  <div className="col-md-6 margin-top margin-bottom">
                    <div className="landing__promo-box tpr__border flex-center flex-col padding-on black-gradient">
                      <h3 className="white center black skew-right">NEWS</h3>
                      <img
                        className="landing__promo-box-icon"
                        src="/static/screen_news.png"
                      />
                    </div>
                  </div>
                </Fade>

                <Fade>
                  <div className="col-md-6 margin-top margin-bottom">
                    <div className="landing__promo-box tpr__border flex-center flex-col padding-on black-gradient">
                      <h3 className="white center black skew-left">
                        FIND SPOTS!
                      </h3>
                      <img
                        className="landing__promo-box-icon"
                        src="/static/screen_mapp.png"
                      />
                    </div>
                  </div>
                </Fade>
                
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateStateStartApp: () => dispatch(startApp())
});

export default compose(
  withAnalytics,
  connect(
    null,
    mapDispatchToProps
  )
)(LandingPage);
