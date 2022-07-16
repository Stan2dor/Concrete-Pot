require("dotenv").config();
const path = require("path");

module.exports = {
  trailingSlash: true,
  images: {
    domains: ["cdn.chec.io"],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
