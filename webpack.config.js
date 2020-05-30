const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = [
  {
    name: "server",
    mode: "development",
    entry: ["./app.js", "./node.js"],
    watch: true,
    target: "node",
    output: {
      path: path.resolve("./public"),
      filename: "node.js"
    }
  },
  {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            warnings: false,
            parse: {},
            extractComments: true, 
            mangle: true, // Note `mangle.properties` is `false` by default.
            toplevel: false,
            nameCache: null,
          }
        })
      ]
    },
    name: "client",
    mode: "development",
    watch: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000
    },
    devtool: "eval",
    entry: ["./src/index.js", "./public/style.css"],
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader"
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    },
    output: {
      path: path.resolve("./public"),
      filename: "index.js"
    }
  }
];
