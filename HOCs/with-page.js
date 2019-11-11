import React from 'react';
import { NavBar, Banner, FunkyTitle } from '../components';
import withAuth from './with-auth';


export default (Wrapped) => {

  class HOC extends React.Component {

    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}
      return wrapped;
    }

    getPageNameRenderTitle() {
      if (process.browser) {
        let pageName = '';
        const { location: { href } } = window;
        pageName = href.slice(22, href.length);
        return <FunkyTitle text={pageName} />
      }
    }

    render() {

      const { gigsTonight } = this.props;

      return (
        <div className="wrapped">

          <Banner src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
            {this.getPageNameRenderTitle()}
          </Banner>

          <NavBar firebase={this.props.firebase} />
          {gigsTonight && gigsTonight.length > 0 && (
            <Bulletin stories={this.props.gigsTonight} />
          )}
          <div className="page-main-content">
            <Wrapped {...this.props} />
          </div>
        </div>
      )
    }
  }
  return withAuth(HOC);
}
