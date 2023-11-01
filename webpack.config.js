require("dotenv").config({ path: process.env.ENV_PATH });
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const utils = require("util");
const isProduction = process.env.NODE_ENV === "production";

/** @type {import('webpack').Configuration} */
module.exports = {
  /** @type {import('webpack-dev-server').Configuration} */
  devServer: {
    port: process.env.PORT,
    historyApiFallback: true,
  },
  // entry: "./src/main.tsx",
  entry: {
    home: "./src/module/home/main.tsx",
    math: "./src/module/math/main.tsx",
    about: "./src/module/about/main.tsx",
  },
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
    minimizer: [
      "...", // Extend existing minimizers (i.e. terser plugin.)
      new CssMinimizerPlugin(), // See https://webpack.js.org/plugins/css-minimizer-webpack-plugin/
    ],
  },
  plugins: [
    ...miniCssExtractPlugin(),

    /**
     * Pass constant values to the source code
     * https://webpack.js.org/plugins/define-plugin
     */
    // new webpack.DefinePlugin({
    //   DEBUG: process.env.NODE_ENV === "development",
    // }),

    new webpack.EnvironmentPlugin(["NODE_ENV", "ENDPOINT", "DEBUG"]),

    /**
     * Do type check in a separate process and show Typescript error on the console
     * https://github.com/TypeStrong/fork-ts-checker-webpack-plugin
     */
    new ForkTsCheckerWebpackPlugin(),

    /**
     * Show ESLint warnings or errors on the console.
     * Require eslint to be installed: npm init @eslint/config
     * https://webpack.js.org/plugins/eslint-webpack-plugin/
     */
    new ESLintPlugin({
      extensions: ["ts", "tsx"],
      exclude: ["node_modules"],
    }),

    new HtmlWebpackPlugin({
      chunks: ["home"],
      filename: "home.html",
      inject: false,
      // See https://github.com/jantimon/html-webpack-plugin#writing-your-own-templates
      templateContent: ({ compilation, htmlWebpackPlugin }) => {
        const prefetchPaths = getJsAssetPaths(compilation, ["about"]);

        return `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <title>React App with React Router Dom</title>
            ${htmlWebpackPlugin.tags.headTags}
            <link ref="prefetch" href="/about.html"/>
            ${prefetchPaths.map((p) => `<link ref="prefetch" href="${p}"/>`)}
          </head>
          <body>
            <div id="root"></div>
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
        `;
      },
    }),

    new HtmlWebpackPlugin({
      chunks: ["math"],
      template: "./index.html",
      filename: "math.html",
    }),
    new HtmlWebpackPlugin({
      chunks: ["about"],
      template: "./index.html",
      filename: "about.html",
    }),

    /**
     * See https://github.com/webpack-contrib/webpack-bundle-analyzer
     */
    ...(process.env.ANALYZE ? [new BundleAnalyzerPlugin()] : []),
  ],
};

function miniCssExtractPlugin() {
  return isProduction
    ? [new MiniCssExtractPlugin({ filename: "style.[contenthash].css" })]
    : [];
}

// /**
//  *
//  * @param {import('webpack').Compilation} compilation
//  * @param {string[]} includeChunks
//  * @returns {string} string of script tags
//  */
// function getPreloadTags(compilation, includeChunks) {
//   if (!includeChunks || !includeChunks.length)
//     throw new Error("includeEntries must not be empty!");

//   return compilation
//     .getAssets()
//     .filter(({ name }) => includeChunks.some((chunk) => name.startsWith(chunk)))
//     .filter(({ name }) => name.endsWith(".js"))
//     .map(({ name }) => `<link rel="preload" as="script" href="${name}"/>`)
//     .join("");
// }

/**
 *
 * @param {import('webpack').Compilation} compilation
 * @param {string[]} include
 * @returns {string[]} Array of JS asset paths
 */
function getJsAssetPaths(compilation, include = []) {
  return compilation
    .getAssets()
    .filter(({ name }) => include.some((chunk) => name.startsWith(chunk)))
    .filter(({ name }) => name.endsWith(".js"))
    .map(({ name }) => name);
}
