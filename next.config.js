const withCSS = require('@zeit/next-css');
// const withSass = require('@zeit/next-sass');

const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

// TO-DO look into what this is and why it works.
// https://github.com/zeit/next-plugins/issues/392
function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config'
  );
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

// module.exports = withSass()

module.exports = withCSS({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    config.node = { fs: 'empty' };
    config.plugins = config.plugins || [];
    config.plugins = [...config.plugins];

    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    });

    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif)$/i,
      use: [
        {
          loader: '@brigad/ideal-image-loader'
        }
      ]
    });

    HACK_removeMinimizeOptionFromCssLoaders(config);
    return config;
  },
  env: {
    // Make Yourself A TPR Admin
    REACT_APP_PANDA_RIOT_ADMINI: 'seVFOFwaXJh8z20Mx6vdmut7SuI2',

    // instagram
    REACT_APP_INSTA_CLIENTID: '12987de5768e49cc814c058fa37c0339',
    REACT_APP_INSTA_CLIENTSECRET: 'ab2ea9299767438696c7150b4230c10c',
    REACT_APP_INSTA_KEY: '12660759117.1677ed0.93f20ab7d2a447429b6aff2da213c77b',

    // gigs / datamap
    REACT_APP_MAPBOX_KEY:
      'pk.eyJ1IjoiYWlkMTk4MDEiLCJhIjoiY2ptZWxxaWxoMjQzdTNwbm8yMnloM243cyJ9._3UeNWHv8wYUF5sT84lHnQ',

    // firebase
    REACT_APP_API_KEY: 'AIzaSyBlImZQu-pKMTJr2t9Eg22KHxxlBsRbZvI',
    REACT_APP_AUTH_DOMAIN: 'the-panda-riot.firebaseapp.com',
    REACT_APP_DATABASE_URL: 'https://the-panda-riot.firebaseio.com',
    REACT_APP_MSG_SENDER_ID: '276121448519',
    REACT_APP_PROJECT_ID: 'the-panda-riot',
    REACT_APP_STORAGE_BUCKET: 'the-panda-riot.appspot.com',

    // git gists / GIGS & news stories
    REACT_APP_TPR_GIST_TOKEN: 'cac9e5d5242153a2bba1c1987a8bbddfb07b3379',

    // actual gig gist
    REACT_APP_GIG_GIST: '7c88e1645fd8518999fb9c764c0d1869',

    // scraper / getter
    REACT_APP_TPR_SCRAPER_TOKEN: 'cac9e5d5242153a2bba1c1987a8bbddfb07b3379',

    // youtube
    REACT_APP_YOUTUBE_KEY: 'AIzaSyAAkPXzhsOtnhQ7JdgNw4IG_RNd9HMSSf0',

    // chat
    REACT_APP_PUSHER_APP_ID: '871542',
    REACT_APP_PUSHER_APP_KEY: '807d3f2b56c8d22bc20f',
    REACT_APP_PUSHER_APP_SECRET: 'cb4157865f9afb7f855d',
    REACT_APP_PUSHER_APP_CLUSTER: 'eu'
  }
});
