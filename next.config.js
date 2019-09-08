const withCSS = require('@zeit/next-css');
// const withSass = require('@zeit/next-sass');

const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

// TO-DO look into what this is and why it works. 
// https://github.com/zeit/next-plugins/issues/392
function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config',
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

    config.node = { fs: 'empty' };

    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ["file-loader"]
    });
    
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif)$/i,
      use: [
        {
          loader: '@brigad/ideal-image-loader',
        },
      ],
    });
  
    config.plugins.push(new webpack.DefinePlugin({
      'process.env.REACT_APP_API_KEY': JSON.stringify(process.env.REACT_APP_API_KEY),
      'process.env.REACT_APP_DATABASE_URL': JSON.stringify(process.env.REACT_APP_DATABASE_URL),
      'process.env.REACT_APP_AUTH_DOMAIN': JSON.stringify(process.env.REACT_APP_AUTH_DOMAIN),
      'process.env.REACT_APP_GIG_GIST': JSON.stringify(process.env.REACT_APP_GIG_GIST),
      'process.env.REACT_APP_INSTA_CLIENTID': JSON.stringify(process.env.REACT_APP_INSTA_CLIENTID),
      'process.env.REACT_APP_INSTA_CLIENTSECRET': JSON.stringify(process.env.REACT_APP_INSTA_CLIENTSECRET),
      'process.env.REACT_APP_INSTA_KEY': JSON.stringify(process.env.REACT_APP_INSTA_KEY),
      'process.env.REACT_APP_MAPBOX_KEY': JSON.stringify(process.env.REACT_APP_MAPBOX_KEY),
      'process.env.REACT_APP_MSG_SENDER_ID': JSON.stringify(process.env.REACT_APP_MSG_SENDER_ID),
      'process.env.REACT_APP_PROJECT_ID': JSON.stringify(process.env.REACT_APP_PROJECT_ID),
      'process.env.REACT_APP_STORAGE_BUCKET': JSON.stringify(process.env.REACT_APP_STORAGE_BUCKET),
      'process.env.REACT_APP_TPR_GIST_TOKEN': JSON.stringify(process.env.REACT_APP_TPR_GIST_TOKEN),
      'process.env.REACT_APP_TPR_SCRAPER_TOKEN': JSON.stringify(process.env.REACT_APP_TPR_SCRAPER_TOKEN),
      'process.env.REACT_APP_YOUTUBE_KEY': JSON.stringify(process.env.REACT_APP_YOUTUBE_KEY),
    }));
    
    HACK_removeMinimizeOptionFromCssLoaders(config);
    return config;
  }
});