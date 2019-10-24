import 'bootstrap/dist/css/bootstrap.min.css';
import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import Firebase, { FirebaseContext } from '../HOCs';
import '../lib/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <FirebaseContext.Provider value={new Firebase()}>
          <div className="app__page-wrapper">
            <Head>
              <title>The Panda Riot</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <link rel="icon" sizes="192x192" href="/static/panda.png" />
            </Head>
            <Component {...pageProps} />
          </div>
        </FirebaseContext.Provider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
