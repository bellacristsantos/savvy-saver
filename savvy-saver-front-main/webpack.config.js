const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        // Define other environment variables if needed
      },
    }),
  ],
    fallback: {
     "os": require.resolve("os-browserify/browser") ,
      "crypto": require.resolve("crypto-browserify")
    }
  },
  node: {
    fs: 'empty',
  },
};
