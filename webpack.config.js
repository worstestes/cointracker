var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    publicPath: '/'
  },
  module : {
    loaders : [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: "file-loader",
      },
      {
        test : /\.js(x)$/,
        include : SRC_DIR,
        loader : 'babel-loader',   
        exclude: /node_modules/,
        
        query: {
          presets: ['react', 'es2015']
       },
      }
    ]
  },
    devServer: {
    historyApiFallback: true,
  },
};