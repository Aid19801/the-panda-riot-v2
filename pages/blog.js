import React from 'react';
// import fetch from 'isomorphic-unfetch';
import { NextSeo } from 'next-seo';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { prismicEndpoint } from '../lib/prismic';
import {
  blogPageLoading,
  blogPageLoaded,
  blogPageFailed,
  fetchBlogPageReq
} from '../redux/actions';

import '../lib/index.css';

class BlogPage extends React.Component {
  static async getInitialProps({ reduxStore, req }) {
    // blog page.
    // update state that we're getting content
    reduxStore.dispatch(fetchBlogPageReq());

    // grab doc from the Prismic API
    const doc = await this.fetchContent(req);

    // pop him in props
    return {
      doc: doc,
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
  }

  render() {
    if (process.browser) {
      console.log('blog page props ==> ', this.props);
    }
    return (
      <div id="page-container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `blog page yo`,
            description: 'This is a blog page for the panda riot',
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
        <h1 className="funky-title">Blog</h1>

        <div className="blog__content-container">
          { this.props.doc && this.props.doc.data}
          <h1>{RichText.asText(this.props.doc.data.title)}</h1>
          <h4>{RichText.asText(this.props.doc.data.description)}</h4>
        </div>

        <button onClick={this.signOut}>Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.blog.loading,
  content: state.blog.content,
  error: state.blog.error
});

const mapDispatchToProps = dispatch => ({
  pageLoading: () => dispatch(blogPageLoading()),
  pageLoaded: () => dispatch(blogPageLoaded()),
  pageFailed: () => dispatch(blogPageFailed()),
  fetchContent: () => dispatch(fetchBlogPageReq())
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BlogPage);
