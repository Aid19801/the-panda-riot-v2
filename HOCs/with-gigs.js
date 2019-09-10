import React, { Component } from 'react';

export default function withGigs(PlatformSpecificComponent) {
  class Gigs extends Component {
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
      return <PlatformSpecificComponent {...this.props} />;
    }
  }
  return Gigs;
}
