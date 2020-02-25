import React, { Component } from 'react';
import Link from 'next/link';
import './side-banner.css';

function withSideBanner(PlatformSpecificComponent) {
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
        isGigs: false,
      }
    }

    componentDidMount() {
      const isGigs = window.location.href.includes('gigs') ? true : false;
      const isDownloads = window.location.href.includes('downloads') ? true : false;
      const isMob = window.innerWidth < 576 ? true : false;

      this.setState({ isGigs, isMob, isDownloads });
    }

    render() {
      const { isGigs, isMob, isDownloads } = this.state;

      return (
        <React.Fragment>
          <div className="side-banner">
            { isGigs && (
              <div className="flex-col" id={ isMob ? "isMob" : "" }>
                
                  <a href="https://www.patreon.com/thePandaRiot?fan_landing=true" target="_blank"><p className="orange center black bold">🍺 Buy Me A Beer? 🍺</p></a>
                
                <Link href="/downloads">
                  <a>
                    <p className="orange center black bold">👨🏻‍💻 Download the Desktop app? 👨🏻‍💻</p>
                  </a>
                </Link>
              </div> 
            )}
            { isDownloads && (
              <div className="flex-col" id={ isMob ? "isMob" : "" }>
                  <a href="https://www.patreon.com/thePandaRiot?fan_landing=true" target="_blank"><p className="orange center black bold">🍺 Buy Me A Beer? 🍺</p></a>
              </div> 
            )}
            
          </div>
          <PlatformSpecificComponent />
        </React.Fragment>
      )
    }

  }
}

export default withSideBanner;