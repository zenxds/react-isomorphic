const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

   module: {
     rules: [
       {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'react']
          }
       },
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
   },

   plugins: [
     new webpack.DefinePlugin({
      '__SERVER__': typeof window === "undefined"
    })
   ]
}
