import React from 'react';
import { NavBar, Banner, FunkyTitle } from '../components';
import withAuth from './with-auth';


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
        if (page.includes('acts/') === true || page.includes('news/') === true) {
          return this.setState({ page: null });
        }

        return this.setState({ page })
      }
    }

    
    render() {

      const { page } = this.state;

      return (
        <div className="wrapped">

          <Banner src="/static/banner-ldn.jpg">
            { page && <FunkyTitle text={page} />}
          </Banner>

          <NavBar firebase={this.props.firebase} />

          <div className="page-main-content">
            <Wrapped {...this.props} />
          </div>
        </div>
      )
    }
  }
  return withAuth(HOC);
}
