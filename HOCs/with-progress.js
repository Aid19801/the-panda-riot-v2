import React, { Component } from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';

export default function withProgressBar(PlatformSpecificComponent) {
  return class extends Component {

    static async getInitialProps(ctx) {
        // Check if Page has a `getInitialProps`; if so, call it.
        const pageProps =
          PlatformSpecificComponent.getInitialProps &&
          (await PlatformSpecificComponent.getInitialProps(ctx));
        // Return props.
        return { ...pageProps };
      }

      
    constructor(props) {
      super(props)
      this.state = {
        isLoading: false,
      }
    }

    handleProgressBar = bool => {
      this.setState({ isLoading: bool })
    }
    
    render() {
      const { isLoading } = this.state;
      return (
        <>
          <PlatformSpecificComponent showProgressBar={this.handleProgressBar} {...this.props} />
          { isLoading && <TopBarProgress /> }
        </>
      )
    }
  
  }
}

// export default withProgressBar;