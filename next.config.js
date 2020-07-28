const path = require('path')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = withPlugins([withImages], {
  webpack: config => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
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
    }

    return config
  },
})
