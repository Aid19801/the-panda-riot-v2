import { Link } from '../routes';
// import { Client, linkResolver } from '../components/prismic';
import { RichText } from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import { prismicEndpoint } from '../lib/prismic';

class NewsStoryPage extends React.Component {

  static async getInitialProps({ req, query }) {
    
    const receivedContent = await this.fetchContent(query.uid);

    return {
        content: receivedContent,
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
    //   console.log('news STORY | this props ', this.props);
    return (
      <div id="page-container" className="container">
          News story page

      </div>
    );
  }
}

export default NewsStoryPage;