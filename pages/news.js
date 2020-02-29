import React from 'react';
import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Prismic from 'prismic-javascript';
import {
  newsPageLoading,
  newsPageLoaded,
  newsPageFailed,

  getAllNews,
  newsApiSuccess,
  prismicNewsApiReq,
  prismicNewsApiSuccess,
  prismicNewsApiFail,
  updateStateAppLoaded
} from '../redux/actions';

import { prismicEndpoint } from '../lib/prismic';
import mockNews from '../lib/mock-news.json';

import {
  Spinner,
  BoxCard,
  MediumBoxCard,
  LargeBoxCard,
} from '../components';


import withProgressBar from '../HOCs/with-progress';
import withPage from '../HOCs/with-page';
import withAuth from '../HOCs/with-auth';

import * as cache from '../lib/cache';
import '../lib/index.css';
import Link from 'next/link';


class NewsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      tprStories: null,
      stories: null,
    };
  }

  static async getInitialProps({ reduxStore, req }) {
    console.log('NODE ENV =====>>> ', process.env.NODE_ENV);
    let retrievedArticles = [];
    let retrievedPrismicStories = [];

    // GET ALL NEWS IN SSR (PROD)
    if (process.env.NODE_ENV === 'production') {
      console.log('========== We Are In Production ==========');
      try {
        const res = await fetch(
          'https://api.github.com/gists/424b043765bf5ad54cb686032f141b34'
        );
        const json = await res.json();
        const rawUrl = json.files.articles.raw_url;
        const req = await fetch(rawUrl);
        const reqJson = await req.json();

        retrievedArticles = reqJson.articles.slice(0, 15);
        console.log('retrieved articles length ======= >> ', retrievedArticles.length);
        reduxStore.dispatch(newsApiSuccess(retrievedArticles));
      } catch (error) {
        console.log('NEWS getInitialProps err: ', error);
      }
    }

    if (process.env.NODE_ENV !== 'production') {
      console.log('========== We Are NOT In Production ==========')
      // GET ALL NEWS IN SSR (DEV)
      try {
        reduxStore.dispatch(newsApiSuccess(mockNews.articles));
      } catch (error) {
        console.log('NEWS getInitialProps err: ', error);
      }
    }

    // GET ALL PRISMIC STORIES
    try {
      reduxStore.dispatch(prismicNewsApiReq()); // update state, requesting it
      retrievedPrismicStories = await this.fetchPrismic(); // get the stories
      reduxStore.dispatch(prismicNewsApiSuccess(retrievedPrismicStories)); // update state with them.
    } catch (error) {
      console.log('error | PRISMIC getInitialProps ==> ', error);
      reduxStore.dispatch(prismicNewsApiFail(error));
    }

    return {
      stories: retrievedArticles,
      tpr_stories: retrievedPrismicStories
    };
  }

  static async fetchPrismic() {
    const client = Prismic.client(prismicEndpoint);
    try {
      const res = await client.query(
        Prismic.Predicates.at('document.type', 'news-story'),
        { orderings: '[document.last_publication_date]' }
      );
      let mostRecentFirst = res.results.reverse();
      return mostRecentFirst;
    } catch (error) {
      this.props.updateStatePrismicFailed(error);
    }
  }

  componentWillMount() {
    this.props.showProgressBar(true);
    this.props.pageLoading();
  }

  async componentDidMount() {
    this.props.updateStateAppLoaded();

    const {
      updateStatefetchNews,
      pageLoaded,
      stories,
      tpr_stories,
      updateStateFetchPrismicStories,
    } = this.props;

    if (!stories) {
      updateStatefetchNews();
    }

    if (!tpr_stories) {
      console.log('client / there are no prismic stories so fetching them...');
      const res = await this.fetchPrismic();
      updateStateFetchPrismicStories(res);
    }

    this.organiseAllStories();

    pageLoaded();

    if (process.browser) {
      this.saveNewsAndGigsToCache();
    }

    setTimeout(() => {
      this.props.showProgressBar(false);
      pageLoaded();
    }, 400);

  }

  organiseAllStories = () => {
    // each `three` has 2x chortle/bbc/btj stories & 1 TPR blog
    const { stories, tpr_stories } = this.props;
    const firstThree = stories.slice(0, 2);
    firstThree.push(tpr_stories[0]);

    const secondThree = stories.slice(2, 4);
    secondThree.push(tpr_stories[1]);

    const thirdThree = stories.slice(4, 6);
    thirdThree.push(tpr_stories[2]);

    const fourthFree = tpr_stories.slice(3, 5);
    fourthFree.push(stories[7]);

    const fifthThree = stories.slice(8, 10);
    fifthThree.push(tpr_stories[6]);

    const sixthThree = tpr_stories.slice(7, 9);
    sixthThree.push(stories[11]);

    const seventhThree = stories.slice(12, 15);

    return this.setState({
      firstThree,
      secondThree,
      thirdThree,
      fourthFree,
      fifthThree,
      sixthThree,
      seventhThree,
    });
  }
  saveNewsAndGigsToCache = () => {
    const cachedNews = cache.getFromCache('stories');
    if (!cachedNews) {
      cache.saveToCache('stories', JSON.stringify(this.props.stories));
    }
  };

  render() {
    const { spinner } = this.props;
    const { firstThree,
      secondThree,
      thirdThree,
      fourthFree,
      fifthThree,
      sixthThree,
      seventhThree,
    } = this.state;

    if (spinner) {
      return <Spinner />
    }

    return (
      <>
        <NextSeo
          title="The Panda Riot | NEWS"
          description="The latest news from London's favourite Open Mic Comedy web-app"
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com/news',
            title: "The Panda Riot | NEWS",
            description:
              "News from London's electric open mic comedy scene",
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

        <div className="news__container container flex-center">
          <div className="row margin-top flex-center">

            {firstThree && (
              <>

                <LargeBoxCard
                  id={firstThree[0]._id}
                  img={firstThree[0].img}
                  blurb={firstThree[0].blurb}
                  headline={firstThree[0].headline}
                  link={firstThree[0].link}
                  src={firstThree[0].src}
                />

                <BoxCard
                  id={firstThree[1]._id}
                  img={firstThree[1].img}
                  blurb={firstThree[1].blurb}
                  headline={firstThree[1].headline}
                  link={firstThree[1].link}
                  src={firstThree[1].src}
                />

                <BoxCard
                  id={firstThree[2].id}
                  img={firstThree[2].data["news-image"].url}
                  headline={firstThree[2].data["news-headline1"][0].text}
                  blurb={firstThree[2].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

              </>
            )
            }

            {secondThree && (
              <>

                <BoxCard
                  id={secondThree[0]._id}
                  img={secondThree[0].img}
                  blurb={secondThree[0].blurb}
                  headline={secondThree[0].headline}
                  link={secondThree[0].link}
                  src={secondThree[0].src}
                />

                <BoxCard
                  id={secondThree[1]._id}
                  img={secondThree[1].img}
                  blurb={secondThree[1].blurb}
                  headline={secondThree[1].headline}
                  link={secondThree[1].link}
                  src={secondThree[1].src}
                />

                <MediumBoxCard
                  id={secondThree[2].id}
                  img={secondThree[2].data["news-image"].url}
                  headline={secondThree[2].data["news-headline1"][0].text}
                  blurb={secondThree[2].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

              </>
            )
            }

            <Link href="mailto:thePandaRiot@gmail.com">
              <a className="news__cta col-sm-12 flex-center">
                <p className="flex-center orange skew-left half-width">
                  Want to write for #ThePandaRiot?
              </p>
              </a>
            </Link>

            {thirdThree && (
              <>

                <LargeBoxCard
                  id={thirdThree[0]._id}
                  img={thirdThree[0].img}
                  blurb={thirdThree[0].blurb}
                  headline={thirdThree[0].headline}
                  link={thirdThree[0].link}
                  src={thirdThree[0].src}
                />

                <MediumBoxCard
                  id={thirdThree[1]._id}
                  img={thirdThree[1].img}
                  blurb={thirdThree[1].blurb}
                  headline={thirdThree[1].headline}
                  link={thirdThree[1].link}
                  src={thirdThree[1].src}
                />

                <BoxCard
                  id={thirdThree[2].id}
                  img={thirdThree[2].data["news-image"].url}
                  headline={thirdThree[2].data["news-headline1"][0].text}
                  blurb={thirdThree[2].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

              </>
            )
            }

            <div className="news__socials col-sm-12 flex-center flex-col">

              <p className="flex-center orange skew-left padding-on">Follow Us On Socials</p>

              <div className="flex-row orange padding-on">
                <img
                  className="footer__img"
                  onClick={() => window.open('https://twitter.com/thepandariot', '_newtab')}
                  src="data:image/png;base64,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"
                  alt="the panda riot twitter "
                  style={{ animationDuration: '1s' }}
                />
                <img
                  className="footer__img"
                  onClick={() => window.open('https://instagram.com/thepandariot', '_newtab')}
                  src="https://i.pinimg.com/originals/c2/81/8c/c2818c6d5d111f61846fbc878bc51b5e.png"
                  alt="the panda riot instagram"
                  style={{ animationDuration: '1.25s' }}
                />
                <img
                  className="footer__img"
                  onClick={() => window.open('https://facebook.com/thepandariot', '_newtab')}
                  src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png"
                  alt="the panda riot facebook"
                  style={{ animationDuration: '1.5s' }}
                />
                <img
                  className="footer__img"
                  onClick={() => window.open('mailto:thePandaRiot@gmail.com', '_newtab')}
                  src="https://i-love-png.com/images/1598522_thumb.png"
                  alt="the panda riot email contact"
                  style={{ animationDuration: '1s' }}
                />
              </div>
            </div>


            {fourthFree && (
              <>

                <BoxCard
                  id={fourthFree[0].id}
                  img={fourthFree[0].data["news-image"].url}
                  headline={fourthFree[0].data["news-headline1"][0].text}
                  blurb={fourthFree[0].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

                <BoxCard
                  id={fourthFree[1].id}
                  img={fourthFree[1].data["news-image"].url}
                  headline={fourthFree[1].data["news-headline1"][0].text}
                  blurb={fourthFree[1].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

                <BoxCard
                  id={fourthFree[2]._id}
                  img={fourthFree[2].img}
                  blurb={fourthFree[2].blurb}
                  headline={fourthFree[2].headline}
                  link={fourthFree[2].link}
                  src={fourthFree[2].src}
                />

              </>
            )
            }

            {fifthThree && (
              <>

                <LargeBoxCard
                  id={fifthThree[0]._id}
                  img={fifthThree[0].img}
                  blurb={fifthThree[0].blurb}
                  headline={fifthThree[0].headline}
                  link={fifthThree[0].link}
                  src={fifthThree[0].src}
                />

                <BoxCard
                  id={fifthThree[1]._id}
                  img={fifthThree[1].img}
                  blurb={fifthThree[1].blurb}
                  headline={fifthThree[1].headline}
                  link={fifthThree[1].link}
                  src={fifthThree[1].src}
                />

                <BoxCard
                  id={fifthThree[2].id}
                  img={fifthThree[2].data["news-image"].url}
                  headline={fifthThree[2].data["news-headline1"][0].text}
                  blurb={fifthThree[2].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

              </>
            )
            }

            {sixthThree && (
              <>

                <BoxCard
                  id={sixthThree[0].id}
                  img={sixthThree[0].data["news-image"].url}
                  headline={sixthThree[0].data["news-headline1"][0].text}
                  blurb={sixthThree[0].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

                <BoxCard
                  id={sixthThree[1].id}
                  img={sixthThree[1].data["news-image"].url}
                  headline={sixthThree[1].data["news-headline1"][0].text}
                  blurb={sixthThree[1].data["news-body"][0].text}
                  link={null}
                  src="TPR"
                />

                <BoxCard
                  id={sixthThree[2]._id}
                  img={sixthThree[2].img}
                  blurb={sixthThree[2].blurb}
                  headline={sixthThree[2].headline}
                  link={sixthThree[2].link}
                  src={sixthThree[2].src}
                />

              </>
            )
            }
            {seventhThree && (
              <>

                <BoxCard
                  id={seventhThree[0]._id}
                  img={seventhThree[0].img}
                  blurb={seventhThree[0].blurb}
                  headline={seventhThree[0].headline}
                  link={seventhThree[0].link}
                  src={seventhThree[0].src}
                />

                <BoxCard
                  id={seventhThree[1]._id}
                  img={seventhThree[1].img}
                  blurb={seventhThree[1].blurb}
                  headline={seventhThree[1].headline}
                  link={seventhThree[1].link}
                  src={seventhThree[1].src}
                />

                <MediumBoxCard
                  id={seventhThree[2]._id}
                  img={seventhThree[2].img}
                  blurb={seventhThree[2].blurb}
                  headline={seventhThree[2].headline}
                  link={seventhThree[2].link}
                  src={seventhThree[2].src}
                />

              </>
            )
            }

          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.signIn.loading,
  error: state.signIn.error,
  reduxUserAuth: state.signIn.userAuth,
  stories: state.newsApi.stories,
  tpr_stories: state.prismic.tpr_stories,
  spinner: state.appState.spinner,
});

const mapDispatchToProps = dispatch => ({
  updateStatefetchNews: () => dispatch(getAllNews()),
  updateStateFetchPrismicStories: () => dispatch(prismicNewsApiReq()), // get prismic stories
  updateStatePrismicFailed: err => dispatch(prismicNewsApiFail(err)),
  updateStateAppLoaded: () => dispatch(updateStateAppLoaded()),
  pageLoading: () => dispatch(newsPageLoading()),
  pageLoaded: () => dispatch(newsPageLoaded()),
  pageFailed: () => dispatch(newsPageFailed())
});

export default compose(
  withPage,
  withAuth,
  withProgressBar,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NewsPage);
