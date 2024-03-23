const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  resolve: {
    fallback: {
      util: require.resolve("util/"),
      url: require.resolve("url/"),
      process: require.resolve('process/browser'),
      
      timers: require.resolve('timers-browserify/'),
      crypto: require.resolve('crypto-browserify/'),
      http: require.resolve("stream-http/"),
      net: require.resolve("net-browserify/")
    } 
  }
});


