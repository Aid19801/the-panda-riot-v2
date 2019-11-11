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

    render() {

      const { gigsTonight } = this.props;
      console.log('AT | gigs ', this.props);
      return (
        <div className="wrapped">

          <Banner src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
            <FunkyTitle text="Home" />
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
