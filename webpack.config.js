const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: './dist/app.js',
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'stylus-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./dist/style.css'),
  ]
};