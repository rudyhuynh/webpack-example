require("dotenv").config({ path: process.env.ENV_PATH });
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('webpack').Configuration} */
module.exports = {
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    port: process.env.PORT,
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  entry: "./src/main.tsx",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name].[contenthash][ext]",
    clean: true,
  },
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2022",
        },
      },
      {
        // See https://react-svgr.com/docs/webpack/
        test: /\.svg$/i,
        issuer: /\.tsx?$/,
        loader: "@svgr/webpack",
      },
    ],
  },
  optimization: {
    minimizer: ["...", new CssMinimizerPlugin()],
  },
  plugins: [
    ...miniCssExtractPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
      exclude: ["node_modules"],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

function miniCssExtractPlugin() {
  return isProduction
    ? [new MiniCssExtractPlugin({ filename: "style.[contenthash].css" })]
    : [];
}
