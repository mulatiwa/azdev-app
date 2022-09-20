import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  target: 'node',
  entry:
  {
    api: ['./src/index[server].js'],
  },
  module: 
  {
    rules: 
    [
      {//JSX & JS
        test: /\.jsx?$/,
        use:
        {
          loader: 'babel-loader',
        },   
        include:[path.resolve(__dirname, './src')],
        exclude:
        [
          path.resolve(__dirname, './node_modules/'),
          // path.resolve(__dirname, '../node_modules/'),
        ]
      },
      { //Graphql
        test: /\.graphql|\.gql$/, 
        loader: 'webpack-graphql-loader' 
      }
    ]
  },

};