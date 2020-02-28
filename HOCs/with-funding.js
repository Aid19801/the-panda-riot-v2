import React, { Component } from 'react';
import './with-funding.css';

function withFunding(PlatformSpecificComponent) {
  return class extends Component {

    static async getInitialProps(ctx) {
      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps =
        PlatformSpecificComponent.getInitialProps &&
        (await PlatformSpecificComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps };
    }

    render() {

      return (
        <React.Fragment>
          <div className="funding">

            <div className="flex-col">

              <a href="https://www.paypal.me/thepandariot" target="_blank">

                <div className="flex-row">
                  <p className="orange center black bold"> 🍺Buy Me A Beer?</p>
                </div>

              </a>

              <a href="https://www.patreon.com/thePandaRiot?fan_landing=true" target="_blank">

                <div className="flex-row">
                  <p className="orange center black bold">Patreon | suppport TPR?</p>
                </div>

              </a>

            </div>
          </div>

          <PlatformSpecificComponent {...this.props} />

        </React.Fragment>
      )
    }

  }
}

export default withFunding;