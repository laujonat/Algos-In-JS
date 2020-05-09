const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  node: {
    net: "empty",
    fs: "empty"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  }
};
