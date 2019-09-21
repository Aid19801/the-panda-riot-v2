import { Link } from '../routes';
// import { Client, linkResolver } from '../components/prismic';
import { RichText } from 'prismic-reactjs';
import { connect } from 'react-redux';
import { NextSeo } from 'next-seo';
import Prismic from 'prismic-javascript';

import * as actions from '../redux/actions';

import { prismicEndpoint } from '../lib/prismic';

class NewsStoryPage extends React.Component {
  static async getInitialProps({ reduxStore, req, query }) {
    console.log('getInitialProps fired!', query.id);
    const receivedContent = await this.fetchContent(query.id);
    console.log('receivedContent back: ', receivedContent);
    reduxStore.dispatch(actions.fetchTPRSuccess(receivedContent));
    return {
      content: receivedContent
    };
  }

  static async fetchContent(uid) {
    console.log('======= fetching content for this: ', uid);
    const client = Prismic.client(prismicEndpoint);
    try {
      const res = await client.query(
        Prismic.Predicates.at('document.id', 'XTnT3BEAACMAxdMt')
      );
      console.log('Story Retrieved: ', res);
      return res;
    } catch (error) {
      console.log('try catch error getting solo article: ', error);
    }
  }

  componentDidMount = async () => {
    // TO-DO - put the client side fetching in here, if routing from home page.
  };

  render() {
    console.log('TPR News Story Props: ', this.props.content);
    const { content } = this.props;
    // const { results } = content;

    return (
      <div id="page-container" className="container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
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
            ]
          }}
        />

        <div className="row">
          <div className="col-sm-12">
            <RichText render={this.props.content.results[0].data['news-headline1']} />
            <img
              src={this.props.content.results[0].data['news-image'].url}
              alt="news for open mic comedy"
            />
            <RichText render={this.props.content.results[0].data['news-body']} />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsStoryPage);
