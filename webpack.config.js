const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: './index.html',
});
module.exports = (env, argv) => {
  // eslint-disable-next-line no-console
  console.log(argv.mode);

  return {
    entry: './client/index.jsx',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [
      htmlPlugin,
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.(jsx|js)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: 'file-loader',
          options: { name: '/static/[name].[ext]' },
        },
        {
          test: /\.css$/i,
          include: path.resolve(__dirname, 'client'),
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ],
    },
  };
};
