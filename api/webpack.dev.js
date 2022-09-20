import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import output from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';
import { ENV, IS_DEV } from '../env-variables/env-var[app].js';
import common from './webpack.config.js';
const {merge} = output


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default merge(common,
{
  mode: ENV,
  externals:
  [
    nodeExternals()
  ],
  output: 
  {
    path: resolve(__dirname, '../app'),
    filename: '[name].node.js',
    clean: IS_DEV ? false : true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer:
  {
    proxy:
    { // proxy URLs to backend development server
      '/api': 'http://localhost:9550'
    },
    port: 8550,
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    compress: true,
    open: true,
    hot: true,
    publicPath: '/',
  },
  //…
}
)