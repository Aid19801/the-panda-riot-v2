import { Link } from '../routes';
// import { Client, linkResolver } from '../components/prismic';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Head from 'next/head';

import { NextSeo } from 'next-seo';
import Prismic from 'prismic-javascript';

import { NavBar, FunkyTitle, Banner, Spinner } from '../components';

import * as actions from '../redux/actions';

import { prismicEndpoint } from '../lib/prismic';
import withAuth from '../HOCs/with-auth';
// import { analyticsPage } from '../lib/utils';
import withAnalytics from '../HOCs/with-ga';
import withProgressBar from '../HOCs/with-progress';
import withPage from '../HOCs/with-page';

class NewsStoryPage extends React.Component {
  static async getInitialProps({ reduxStore, req, query }) {
    // console.log('getInitialProps fired LOOKING FOR ID ========>>> ', query.uid);
    const receivedContent = await this.fetchContent(query.uid);
    console.log('receivedContent back');
    // analyticsPage(`v2-tpr-news-story`);
    reduxStore.dispatch(actions.fetchTPRSuccess(receivedContent));
    return {
      content: receivedContent
    };
  }

  static async fetchContent(uid) {
    const client = Prismic.client(prismicEndpoint);
    try {
      const res = await client.query(Prismic.Predicates.at('document.id', uid));
      return res;
    } catch (error) {
      console.log('try catch error getting solo article: ', error);
    }
  }

  componentWillMount() {
    this.props.showProgressBar(true);
  }
  componentDidMount = async () => {
    // TO-DO - put the client side fetching in here, if routing from home page.
    // analyticsPage(`v2-tpr-news-story`);
    setTimeout(() => {
      this.props.showProgressBar(false);
    }, 500);
    this.props.updateStateAppLoaded();
  };

  render() {
    const { content, spinner } = this.props;

    if (spinner) {
      return <Spinner />
    }
    
    return (
      <>
        <NextSeo
          title={`${content.results[0].data['news-headline1'][0].text}`}
          description={`${content.results[0].data['news-body'][0].text}`}
          openGraph={{
            type: 'website',
            url: `https://www.thePandaRiot.com/news/${content.results[0].id}`,
            title: `${content.results[0].data['news-headline1'][0].text}`,
            description: `${content.results[0].data['news-body'][0].text}`,
            images: [
              {
                url: `${content.results[0].data['news-image'].url}`,
                width: 800,
                height: 600,
                alt: 'Open Mic Comedy Audience'
              },
              {
                url:
                  'https://pbs.twimg.com/profile_images/498909008292347904/8EkJ3yZ-_400x400.png',
                width: 800,
                height: 600,
                alt: 'Open Mic Comedy Opportunities'
              }
            ],
            site_name: '#ThePandaRiot'
          }}
        />

      <Head>
        <meta name="twitter:image" content={content.results[0].data['twitter-image'].url} />
        <meta name="twitter:creator" content="@aidThompsin" />
        <meta name="twitter:site" content="@thePandaRiot" />
      </Head>

        <div className="container tpr__container">
          <div className="row flex-center">
            
            <h1 className="act-name mt-100">{this.props.content.results[0].data['news-headline1'][0].text}</h1>

            <div className="col-sm-12">
              <img
                className="tpr__image"
                src={this.props.content.results[0].data['news-image'].url}
                alt={
                  this.props.content.results[0].data['news-headline1'][0].text
                }
              />
              <RichText
                render={this.props.content.results[0].data['news-body']}
              />
            </div>
          </div>
        </div>
      </>
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
  spinner: state.appState.spinner,
});
export default compose(
  withPage,
  withProgressBar,
  withAnalytics,
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NewsStoryPage);
