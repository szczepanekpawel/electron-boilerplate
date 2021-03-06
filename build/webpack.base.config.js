const path = require("path");
const nodeExternals = require("webpack-node-externals");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const translateEnvToMode = (env) => {
  if (env === "production") {
    return "production";
  }
  return "development";
};

module.exports = env => {
  return {
    target: "electron-renderer",
    mode: translateEnvToMode(env),
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    resolve: {
      alias: {
        env: path.resolve(__dirname, `../config/env_${env}.json`)
      }
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({clearConsole: env === "development"}),
      new CopyPlugin([
        {from: path.resolve(__dirname, '../src/views'), to: path.resolve(__dirname, '../app/views')},
        {from: path.resolve(__dirname, '../node_modules/bootstrap/dist/css'), to: path.resolve(__dirname, '../app/css')},
        {from: path.resolve(__dirname, '../resources/images/'), to: path.resolve(__dirname, '../app/images')},
      ]),
    ]
  };
};
