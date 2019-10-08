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
    REACT_APP_PANDA_RIOT_ADMINI: process.env.REACT_APP_PANDA_RIOT_ADMINI,
    // // instagram
    // REACT_APP_INSTA_CLIENTID: '12987de5768e49cc814c058fa37c0339',
    // REACT_APP_INSTA_CLIENTSECRET: 'ab2ea9299767438696c7150b4230c10c',
    // REACT_APP_INSTA_KEY: '12660759117.1677ed0.93f20ab7d2a447429b6aff2da213c77b',

    // gigs / datamap
    REACT_APP_MAPBOX_KEY: process.env.REACT_APP_MAPBOX_KEY,

    // firebase
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN: process.env.REACT_APP_AUTH_DOMAIN,
    REACT_APP_DATABASE_URL: process.env.REACT_APP_DATABASE_URL,
    REACT_APP_MSG_SENDER_ID: process.env.REACT_APP_MSG_SENDER_ID,
    REACT_APP_PROJECT_ID: process.env.REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET: process.env.REACT_APP_STORAGE_BUCKET,

    // git gists / GIGS & news stories
    REACT_APP_TPR_GIST_TOKEN: process.env.REACT_APP_TPR_GIST_TOKEN,

    // actual gig gist
    REACT_APP_GIG_GIST: process.env.REACT_APP_GIG_GIST,

    // scraper / getter
    REACT_APP_TPR_SCRAPER_TOKEN: process.env.REACT_APP_TPR_SCRAPER_TOKEN,

    // youtube
    REACT_APP_YOUTUBE_KEY: process.env.REACT_APP_YOUTUBE_KEY,

    // chat
    REACT_APP_PUSHER_APP_ID: process.env.REACT_APP_PUSHER_APP_ID,
    REACT_APP_PUSHER_APP_KEY:  process.env.REACT_APP_PUSHER_APP_KEY,
    REACT_APP_PUSHER_APP_SECRET:  process.env.REACT_APP_PUSHER_APP_SECRET,
    REACT_APP_PUSHER_APP_CLUSTER:  process.env.REACT_APP_PUSHER_APP_CLUSTER,
  }
});
