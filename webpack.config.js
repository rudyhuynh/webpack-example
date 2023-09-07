const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @returns {import('webpack').Configuration}
 */
module.exports = function (env) {
  const isProduction = env.production;

  return {
    entry: "./src/main.tsx",
    output: {
      filename: "[name].[contenthash].js",
      assetModuleFilename: "assets/[name]-[contenthash][ext]",
      path: path.join(__dirname, "public/dist"),
      clean: true,
    },
    mode: isProduction ? "production" : "development",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [[require("autoprefixer")]],
                },
              },
            },
          ],
        },
        {
          test: /\.[jt]sx?$/,
          loader: "esbuild-loader",
          options: {
            target: "es2022",
          },
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      ...(MiniCssExtractPlugin.loader
        ? [
            new MiniCssExtractPlugin({
              filename: "styles-[contenthash].css",
              ignoreOrder: true,
            }),
          ]
        : []),
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    /** @type {import('webpack-dev-server').Configuration} */
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      compress: true,
      port: 9000,
      hot: true,
    },
  };
};
