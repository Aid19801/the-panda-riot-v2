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

              <meta charset="utf-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta
                name="viewport"
                content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
              />
              <meta name="description" content="London's premier open mic comedy web-app" />
              <meta name="keywords" content="Open Mic Comedy in London" />
              <title>The Panda Riot</title>

              <link rel="icon" sizes="192x192" href="/static/panda.png" />
              <meta name="twitter:image" content="https://i.ytimg.com/vi/kQBHzHBMlM4/hqdefault.jpg" />

              <link rel="apple-touch-icon" href="/static/panda.png" />
              <meta
                name="apple-mobile-web-app-title"
                content="The Panda Riot"
              />
              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="default"
              />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="mobile-web-app-capable" content="yes" />

              <meta name="theme-color" content="red" />
              <meta name="mobile-web-app-capable" content="yes" />
            </Head>
            <Component {...pageProps} />
          </div>
        </FirebaseContext.Provider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
