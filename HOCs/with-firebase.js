import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFirebase } from '.';
import * as cache from '../lib/cache';
import Router from 'next/router';
import { saveAuthenticatedUID } from '../redux/actions';

export default function withFirebase(PlatformSpecificComponent) {
  class withFirebaseClass extends React.Component {


    static async getInitialProps(ctx) {
      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps =
        PlatformSpecificComponent.getInitialProps &&
        (await PlatformSpecificComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps };
    }

    constructor(props) {
      super(props);
      this.state = {
        authUser: null
      };
    }

    
    render() {
      const { authUser } = this.state;
      return (
        <PlatformSpecificComponent
          {...this.props}
        />
      );
    }
  }

  const mapDispatchToProps = dispatch => ({
    updateStateWithUID: id => dispatch(saveAuthenticatedUID(id))
  });

  return compose(
    connect(
      null,
      mapDispatchToProps
    )
  )(withFirebaseClass);
};

