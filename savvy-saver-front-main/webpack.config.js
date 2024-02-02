const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
    }
  },
  node: {
    fs: 'empty',
  },
};
