
const webpackChain = (config, { webpack }) => {
  config.merge({
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        minSize: 10000,
        minChunks: 1,
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true
          },
        },
      },
    }
  });

};

export default webpackChain;
