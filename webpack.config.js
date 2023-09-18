const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader", // run second, inject CSS on runtime
          "css-loader", // run first, url()
        ],
      },
    ],
  },
};
