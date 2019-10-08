import { Link } from '../routes';
// import { Client, linkResolver } from '../components/prismic';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { NextSeo } from 'next-seo';
import Prismic from 'prismic-javascript';

import { NavBar, FunkyTitle, Banner } from '../components';

import * as actions from '../redux/actions';

import { prismicEndpoint } from '../lib/prismic';
import withAuth from '../HOCs/with-auth';
// import { analyticsPage } from '../lib/utils';
import withAnalytics from '../HOCs/with-ga';

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
    // console.log('======= fetching content for this: ', uid);
    const client = Prismic.client(prismicEndpoint);
    try {
      const res = await client.query(Prismic.Predicates.at('document.id', uid));
      // console.log('Story Retrieved: ', res);
      return res;
    } catch (error) {
      console.log('try catch error getting solo article: ', error);
    }
  }

  componentDidMount = async () => {
    // TO-DO - put the client side fetching in here, if routing from home page.
    // analyticsPage(`v2-tpr-news-story`);
  };

  render() {
    // console.log('TPR News Story Props: ', this.props.content);
    const { content } = this.props;
    // const { results } = content;

    console.log('content yo ', content);
    return (
      <div id="page-container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: `https://tpr-v2.herokuapp.com/news/${content.results[0].id}`,
            title: `${content.results[0].data['news-headline1'][0].text}`,
            description: `${content.results[0].data['news-body'][0].text}`,
            images: [
              {
                url: `${content.results[0].data['news-image'].url}`,
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
            ],
            site_name: '#ThePandaRiot',
          }}
        />
        <NavBar firebase={this.props.firebase} />
        <Banner />

        <div className="container tpr__container">
          <div className="row flex-center">
            <FunkyTitle
              text={
                this.props.content.results[0].data['news-headline1'][0].text
              }
            />
            <div className="col-sm-12">
              <img
                className="tpr__image"
                src={this.props.content.results[0].data['news-image'].url}
                alt="news for open mic comedy"
              />
              <RichText
                render={this.props.content.results[0].data['news-body']}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateStateFetchArticle: () => dispatch(actions.fetchTPRStory()),
  updateStateGotArticle: res => dispatch(actions.fetchTPRSuccess(res))
});

const mapStateToProps = state => ({
  content: state.prismic.content
});
export default compose(
  withAnalytics,
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NewsStoryPage);
