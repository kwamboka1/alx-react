entry: {
  main: path.resolve(__dirname, './src/app.js'),
},
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'deploy')
},
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
  ]
},
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
  ],
};
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }

