import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import Firebase, { FirebaseContext } from '../HOCs';
import '../lib/index.css';

// redux
// firebase
// mapbox
// git gist


class MyApp extends App {

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <FirebaseContext.Provider value={new Firebase()}>
          <div className="app__page-wrapper">
            <Component {...pageProps} />
          </div>
        </FirebaseContext.Provider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
