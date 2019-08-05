const path = require("path");

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },  
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ],
  }
};