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
      filename: "node.js",
    },
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
          },
        }),
      ],
    },
    name: "client",
    mode: "development",
    watch: true,
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
    },
    resolve: {
      alias: {
        components: path.resolve(
          __dirname,
          " node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"
        ),
        "~": path.resolve(__dirname),
        webcomponents: path.resolve(__dirname, "src/webcomponents"),
      },
    },
    devtool: "eval",
    entry: {
      index: "./src/index.js",
      style: "./public/style.css",
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "public"),
    },
  },
];
