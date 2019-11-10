import React, { Component } from 'react';
import { NavBar, Banner, FunkyTitle } from '../components';
import withAuth from './with-auth';


export default (Wrapped) => {

  class HOC extends Component {
    
    static async getInitialProps(...args) {
      const wrappedInitial = Wrapped.getInitialProps
      const wrapped = wrappedInitial ? await wrappedInitial(...args) : {}
      return wrapped;
    }

    render() {      
      return (
            <div className="wrapped">
                
                <Banner src="https://www.hindisoch.com/wp-content/uploads/2016/11/Funny-Pictures-Girlfriend-Wanted.jpg">
                    <FunkyTitle text="Chat" />
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
