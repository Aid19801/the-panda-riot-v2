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

