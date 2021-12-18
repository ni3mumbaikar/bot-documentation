const path = require("path");

const config = {
  entry: path.resolve(__dirname, "./src/index.js"),
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "app.bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader?cacheDirectory=true",
        },
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },

  devtool: "source-map",
};

module.exports = config;
