import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { Router, Link } from '../routes';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { prismicEndpoint } from '../lib/prismic';
import {
  newsPageLoading,
  newsPageLoaded,
  newsPageFailed,
  fetchNewsPageReq
} from '../redux/actions';

import '../lib/index.css';
// import { analyticsPage } from '../lib/utils';

class NewsPage extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    // update state that we're fetching content from Prismic
    reduxStore.dispatch(fetchNewsPageReq());

    // grab doc from the Prismic API
    const docs = await this.fetchContent(req);

    // pop him in props
    return {
      docs: docs
    };
  }

  static async fetchContent(req) {
    const client = Prismic.client(prismicEndpoint);

    try {
      const res = await client.query(
        Prismic.Predicates.at('document.type', 'news-story'),
        { orderings: '[document.last_publication_date]' }
      );
      const rev = res.results.reverse();
      console.log('revrsed prismic news stories: ', rev);

      return rev;
    } catch (error) {
      console.log('try catch error getting prismic ', error);
    }
  }

  async componentDidMount() {
    const { pageLoading, pageLoaded } = this.props;
    pageLoading();
    pageLoaded();
    this.props.updateStateAppLoaded();
  }

  handleClick = id => {
    console.log('handleClick fired: ', id);
    return Router.pushRoute(`/news/${id}`);
  };

  render() {
    if (process.browser) {
      console.log('news page props ==> ', this.props);
    }
    return (
      <div id="page-container container">
        <NextSeo
          title="The Panda Riot | Open Mic Comedy News"
          description="The latest exclusive content from The Panda Riot. Scandals, blogs, reviews and more - from London's electric open mic comedy circuit."
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `news page yo`,
            description: 'This is a news page for the panda riot',
            images: [
              {
                // url: 'https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg',
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
        <h1 className="funky-title">news</h1>

        <Link to="home">
          <a>Home</a>
        </Link>

        <div className="row">
          {this.props.docs &&
            this.props.docs.map((each, i) => {
              return (
                <div
                  onClick={() => this.handleClick(each.id)}
                  className="news__card-container col-sm-4"
                  key={i}
                >
                  <RichText render={each.data['news-headline1']} />
                  <img
                    className="news__card-img"
                    alt={each.data['news-image'].alt}
                    src={each.data['news-image'].url}
                  />
                </div>
              );
            })}
        </div>

        <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.news.loading,
  content: state.news.content,
  error: state.news.error
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(newsPageLoading()),
  pageLoaded: () => dispatch(newsPageLoaded()),
  pageFailed: () => dispatch(newsPageFailed()),
  fetchContent: () => dispatch(fetchNewsPageReq())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NewsPage);
