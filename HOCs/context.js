import React from 'react';

const FirebaseContext = React.createContext(null);

// with Firebase is the HOC that returns the consumer
// of whatever we pass to the provider.

export const withFirebase = PlatformSpecificComponent => {
  return class extends React.Component {
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
      };
    }

    render() {
      return (
        <>
          <FirebaseContext.Consumer>
            {firebase => (
              <PlatformSpecificComponent {...this.props} firebase={firebase} />
            )}
          </FirebaseContext.Consumer>
        </>
      );
    }
  };
};

export default FirebaseContext;
