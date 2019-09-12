import { Link } from '../routes';
// import { Client, linkResolver } from '../components/prismic';
import { RichText } from 'prismic-reactjs';
import { NextSeo } from 'next-seo';
import Prismic from 'prismic-javascript';
import { prismicEndpoint } from '../lib/prismic';

class NewsStoryPage extends React.Component {
  static async getInitialProps({ req, query }) {
    const receivedContent = await this.fetchContent(query.uid);

    return {
      content: receivedContent
    };
  }

  static async fetchContent(uid) {
    const client = Prismic.client(prismicEndpoint);

    try {
      const res = await client.query(Prismic.Predicates.at('document.id', uid));
      //   console.log('Story Retrieved: ', res);
      return res;
    } catch (error) {
      console.log('try catch error getting solo article: ', error);
    }
  }

  render() {
    console.log('news STORY | this props ', this.props);
    return (
      <div id="page-container" className="container">
        <NextSeo
          openGraph={{
            type: 'website',
            url: 'https://www.thePandaRiot.com',
            title: `${this.props.content.results[0].data['news-headline1'][0].text}`,
            description: `${this.props.content.results[0].data['news-body'][0].text}`,
            images: [
              {
                url: `${this.props.content.results[0].data['news-image'].url}`,
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

        <RichText
          render={this.props.content.results[0].data['news-headline1']}
        />

        <img
          src={this.props.content.results[0].data['news-image'].url}
          alt={this.props.content.results[0].data['news-image'].alt || "news for open mic comedy in London"}
        />
        <RichText render={this.props.content.results[0].data['news-body']} />
      </div>
    );
  }
}

export default NewsStoryPage;
