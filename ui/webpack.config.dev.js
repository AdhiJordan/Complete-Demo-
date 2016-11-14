import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WriteFilePugin from 'write-file-webpack-plugin';

console.log(path.join(__dirname, 'output'))

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', 
  noInfo: true, 
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/index'
  ],
  resolve: {
    root: path.join(__dirname, 'src')
  },  
  // target: 'web', 
  devServer: {
    outputPath: path.join(__dirname, 'output') 
  },
  output: {
    // path: `${__dirname}/src`, 
    path: path.join(__dirname, 'output'),
    publicPath: 'http://localhost:3000/', 
    filename: 'index.[hash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), 
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({     
      template: 'src/index.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    }),
    new WriteFilePugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /\.css$/,  loader: 'style-loader!css-loader!postcss-loader'},
      {test: /\.json$/, loader: 'json' },
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loaders: ['file']},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'}
    ]
  }
};
