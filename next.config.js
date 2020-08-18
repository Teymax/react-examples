const path = require('path');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withPlugins(
  [
    withFonts,
    withCSS({
      webpack: function (config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]',
            },
          },
        });
        return config;
      },
    }),
    withImages,
    withSass,
  ],
  {
    webpack: (config) => {
      Object.assign(config.resolve.alias, {
        '@': path.resolve(__dirname),
        '@public': path.resolve(__dirname, 'public'),
        '@components': path.resolve(__dirname, 'components'),
        '@interfaces': path.resolve(__dirname, 'interfaces'),
        '@assets': path.resolve(__dirname, 'assets'),
        '@redux': path.resolve(__dirname, 'redux'),
        '@interfaces': path.resolve(__dirname, 'interfaces'),
        '@utils': path.resolve(__dirname, 'utils'),
        '@hooks': path.resolve(__dirname, 'hooks'),
        '@styles': path.resolve(__dirname, 'styles'),
        '@services': path.resolve(__dirname, 'services'),
        '@static': path.resolve(__dirname, 'static'),
        '@context': path.resolve(__dirname, 'context'),
        '@core': path.resolve(__dirname, 'core'),
      });

      return config;
    },
  }
);
