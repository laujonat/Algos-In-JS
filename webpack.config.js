const path = require("path");

module.exports = [
  {
    name: "server",
    mode: "development",
    entry: "./index.js",
    watch: true,
    target: "node",
    output: {
      path: path.resolve("./public"),
      filename: "node.js"
    }
  },
  {
    name: "client",
    mode: "development",
    watch: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000
    },
    devtool: "eval",
    entry: "./src/index.js",
    output: {
      path: path.resolve("./public"),
      filename: "index.js"
    }
  }
];
/*
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ]
        }
      ]
    },*/
