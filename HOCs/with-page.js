import React from 'react';
import { NavBar, Banner, FunkyTitle, Footer } from '../components';
import withAuth from './with-auth';
import withFunding from './with-funding';


export default (Wrapped) => {

  class HOC extends React.Component {

    constructor() {
      super();
      this.state = {
        page: '',
      }
    }

    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}
      return wrapped;
    }

    componentDidMount() {
      this.getPageNameRenderTitle();
    }

    getPageNameRenderTitle() {
      if (process.browser) {
        const { location: { href } } = window;
        let page = href.slice(22, href.length);
        if (page === "") {
          let rootPageTitle = "Comedy Starts Here!";
          return this.setState({ page: rootPageTitle });
        }
        if ( (page.includes('acts/') === true) || (page.includes('news/') === true) || (href.includes('/me') === true) ) {
          return this.setState({ page: null });
        }

        if (page.includes('news')) {
          return this.setState({ page: 'news' });
        }

        return this.setState({ page: "#tpr" })
      }
    }

    
    render() {

      const { page } = this.state;

      return (
        <div className="wrapped">

          <Banner src="/static/new_bg.jpeg">
            {/* { page && <FunkyTitle text={page} />} */}
          </Banner>

          <NavBar firebase={this.props.firebase} />

          <div className="page-main-content">
            <Wrapped {...this.props} />
          </div>

          <Footer />
        </div>
      )
    }
  }
  return withAuth(HOC);
}
