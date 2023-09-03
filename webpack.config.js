const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$'/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
