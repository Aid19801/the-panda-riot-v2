import React, { Component } from 'react';
import { NextSeo } from 'next-seo';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RichText } from 'prismic-reactjs';
import * as cache from '../lib/cache';
import { prismicEndpoint } from '../lib/prismic';
import * as actions from '../redux/actions';
import Prismic from 'prismic-javascript';
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

  static async getInitialProps({ reduxStore, req, query }) {
    // console.log('getInitialProps fired LOOKING FOR ID ========>>> ', query.uid);
    const receivedContent = await this.fetchContent("guardian-news-trans-fringe");
    // console.log('AT | receivedContent ---->> ', receivedContent);
    reduxStore.dispatch(actions.fetchTPRSuccess(receivedContent));
    return {
      content: receivedContent
    };
  }

  static async fetchContent(uid) {
    const client = Prismic.client(prismicEndpoint);
    try {
      const res = await client.query(Prismic.Predicates.at('document.type', 'guardian-type'));
      // console.log('AT | res is back =====>', res.results[0]);
      return res.results[0];
    } catch (error) {
      console.log('try catch error getting guardian article: ', error);
    }
  }


  async componentDidMount() {
  }

  render() {
    const { content } = this.props;
    console.log('AT | content :', content);

    return (
      <React.Fragment>
        <NextSeo
          title={content.data.headline[0].text}
          description={content.data.byline[0].text}

          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/guardian',
            title: content.data.headline[0].text,
            description: content.data.byline[0].text,
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

        <Head>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="data:image/jpeg;base64,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" />
          <meta name="twitter:creator" content="@theGuardian" />
          <meta name="twitter:site" content="@theGuardian" />
        </Head>



        <div className="guardian_wrapper" style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: '#052962' }}>

          <div className="container container-fluid">
            <div className="row">
              <div className="col-sm-12 margin-top margin-bottom">
                <img src="/static/guard_logo.png" alt="guardian" className="guard_logo float-right" />
              </div>

              <span className="veggie-burger">
                <span className="veggie-burger__icon">
                  <div className="veggie-burger__three-lines"></div>
                  <div className="veggie-burger__three-lines"></div>
                  <div className="veggie-burger__three-lines"></div>
                </span>
              </span>

              <div className="col-sm-12 margin-off padding-off">

                <ul className="guardian_nav_ul flex-row">
                  <li className="guardian_nav_li">News</li>
                  <li className="guardian_nav_li">Opinion</li>
                  <li className="guardian_nav_li">Sport</li>
                  <li className="guardian_nav_li">Culture</li>
                  <li className="guardian_nav_li">Lifestyle</li>
                </ul>

                <ul className="guardian_nav_ul flex-row bg-white w-100">
                  <li className="guardian_subnav_li">UK</li>
                  <li className="guardian_subnav_li">World</li>
                  <li className="guardian_subnav_li">Business</li>
                  <li className="guardian_subnav_li">Coronavirus</li>
                  <li className="guardian_subnav_li">Football</li>
                  <li className="guardian_subnav_li">More</li>
                </ul>


              </div>

              <div className="col-sm-12 padding-off bg-white">

                <div className="guard-sections-lines-container">
                  <span className="guard-section-lines" />
                  <span className="guard-section-lines" />
                  <span className="guard-section-lines" />
                </div>
              </div>

              <div className="col-sm-12 padding-off bg-white">

                <img
                  src="https://img.huffingtonpost.com/asset/5d038e0a2100009518f3320a.jpeg?ops=scalefit_630_noupscale"
                  alt="open mic comedy"
                  className="guard-main-article-image"
                />
              </div>


              <div className="col-sm-12 padding-off bg-white">
                <div className="guard-padding-left">
                  <a href="https://www.theguardian.com/science">
                    <span className="guard-label__link-wrapper">
                      Comedy
                    </span>
                  </a>
                </div>
              </div>

              <div className="col-sm-12 padding-off bg-white">
                <div className="guard-padding-left">
                  <h1 className="guard-headline">{content.data.headline[0].text}</h1>
                </div>
              </div>

              <div className="col-sm-12 padding-off bg-white">
                <div className="guard-padding-left padding-top">
                  <p className="guard-byline">{content.data.byline[0].text}</p>
                </div>
              </div>

              <div className="col-sm-12 padding-off bg-white">

                <div className="guard-sections-lines-container">
                  <span className="guard-section-lines" />
                  <span className="guard-section-lines" />
                  <span className="guard-section-lines" />
                </div>
              </div>


              <div className="col-sm-12 padding-off bg-white">
                <div className="guard-padding-left flex-row">

                  <span className="guard-label__link-wrapper bold">
                    Logan Bryant
                    </span>
                    &nbsp;
                    <span className="guard-label__link-wrapper not-bold">
                    Culture Editor
                    </span>

                </div>
              </div>

              <div className="col-sm-12 padding-off bg-white">
                <div className="guard-padding-left flex-col">


                  <div className="flex-row">

                    <span className="guard-date-time guard-twitter-fill">
                      <svg width="14" height="14" viewBox="-298 390 14 14" className="i-left__svg inline-twitter-bird__svg inline-icon__svg">
                        <path d="M-284 392.6c-.5.2-1.1.4-1.6.5.6-.4 1-.9 1.3-1.6-.6.3-1.2.6-1.8.7-.5-.6-1.3-.9-2.1-.9-1.6 0-2.9 1.3-2.9 2.9 0 .2 0 .4.1.7-2.4-.1-4.5-1.3-5.9-3-.2.4-.4.9-.4 1.4 0 1 .5 1.9 1.3 2.4-.5 0-.9-.1-1.3-.4 0 1.4 1 2.6 2.3 2.8-.2.1-.5.1-.8.1-.2 0-.4 0-.5-.1.4 1.1 1.4 2 2.7 2-1 .8-2.2 1.2-3.6 1.2h-.7c1.3.8 2.8 1.3 4.4 1.3 5.3 0 8.2-4.4 8.2-8.2v-.4c.3-.2.8-.8 1.3-1.4"></path>
                      </svg>
                    </span>
                    &nbsp;
                    <span className="guard-date-time">
                      @LoganBryant
                    </span>
                  </div>

                  <span className="guard-date-time">
                    Sunday 26 April 2020 10:00 BST
                  </span>
                </div>
              </div>

              <div className="col-sm-12 padding-off bg-white">
                <div className="guard-sections-lines-container margin-bottom">
                  <span className="guard-section-lines" />
                </div>
              </div>


              <div className="col-sm-12 padding-off bg-white">
                <div className="flex-row margin-bottom guard-padding-left space-between">

                  <div className="guard-socials-container flex-row">
                    <span className="guard-social">
                      <svg viewBox="-2 -2 32 32" className="guard-twitter-fill-red rounded-icon__svg centered-icon__svg social-icon__svg social-icon--facebook__svg inline-share-facebook__svg inline-icon__svg">
                        <path d="M17.9 14h-3v8H12v-8h-2v-2.9h2V8.7C12 6.8 13.1 5 16 5c1.2 0 2 .1 2 .1v3h-1.8c-1 0-1.2.5-1.2 1.3v1.8h3l-.1 2.8z"></path>
                      </svg>
                    </span>
                    <span className="guard-social">
                      <svg viewBox="-2 -2 32 32" className="guard-twitter-fill-red rounded-icon__svg centered-icon__svg social-icon__svg social-icon--twitter__svg inline-share-twitter__svg inline-icon__svg">
                        <path d="M21.3 10.5v.5c0 4.7-3.5 10.1-9.9 10.1-2 0-3.8-.6-5.3-1.6.3 0 .6.1.8.1 1.6 0 3.1-.6 4.3-1.5-1.5 0-2.8-1-3.3-2.4.2 0 .4.1.7.1l.9-.1c-1.6-.3-2.8-1.8-2.8-3.5.5.3 1 .4 1.6.4-.9-.6-1.6-1.7-1.6-2.9 0-.6.2-1.3.5-1.8 1.7 2.1 4.3 3.6 7.2 3.7-.1-.3-.1-.5-.1-.8 0-2 1.6-3.5 3.5-3.5 1 0 1.9.4 2.5 1.1.8-.1 1.5-.4 2.2-.8-.3.8-.8 1.5-1.5 1.9.7-.1 1.4-.3 2-.5-.4.4-1 1-1.7 1.5z"></path>
                      </svg>
                    </span>
                    <span className="guard-social">
                      <svg viewBox="0 0 32 32" className="guard-twitter-fill-red rounded-icon__svg centered-icon__svg social-icon__svg social-icon--email__svg inline-share-email__svg inline-icon__svg">
                        <path d="M23.363 20.875H8.637v-8.938l6.545 5.687h1.637l6.544-5.687v8.938zm-1.635-9.75L16 16l-5.728-4.875h11.456zM23.363 9.5H8.637L7 11.125v9.75L8.637 22.5h14.727L25 20.875v-9.75L23.363 9.5z"></path>
                      </svg>
                    </span>

                  </div>

                  <div className="flex-col margin-right">
                    <span>
                      <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.073 8.4c-.475 0-.906.19-1.225.497l-5.308-2.676.015-.221-.015-.221 5.308-2.676c.319.308.75.497 1.225.497.982 0 1.778-.806 1.778-1.8s-.796-1.8-1.778-1.8-1.778.806-1.778 1.8l.016.233-5.299 2.675c-.32-.313-.755-.507-1.236-.507-.982 0-1.778.806-1.778 1.8s.796 1.8 1.778 1.8c.48 0 .915-.194 1.236-.507l5.299 2.675-.016.233c0 .994.796 1.8 1.778 1.8s1.778-.806 1.778-1.8-.796-1.8-1.778-1.8zm0-7.68c.588 0 1.067.484 1.067 1.08 0 .596-.479 1.08-1.067 1.08s-1.067-.484-1.067-1.08c0-.596.479-1.08 1.067-1.08zm0 10.56c-.588 0-1.067-.484-1.067-1.08 0-.596.479-1.08 1.067-1.08s1.067.484 1.067 1.08c0 .596-.479 1.08-1.067 1.08z">
                        </path>
                      </svg>
                    </span>
                    <p className="guard-paragraph">73</p>
                  </div>
                </div>
              </div>



              <div className="col-sm-12 padding-off bg-white">
                <div className="guard-main-article guard-padding-left flex-col">

                  <RichText
                    render={this.props.content.data.article}
                  />
                </div>
              </div>



            </div>



          </div>





          <div className="row full-width">
            <div className="col-sm-4"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateStateFetchArticle: () => dispatch(actions.fetchTPRStory()),
  updateStateGotArticle: res => dispatch(actions.fetchTPRSuccess(res)),
  updateStateAppLoading: () => dispatch(updateStateAppLoading()),
  updateStateAppLoaded: () => dispatch(actions.updateStateAppLoaded()),
});

const mapStateToProps = state => ({
  content: state.prismic.content,
});


export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(GuardianPage);

