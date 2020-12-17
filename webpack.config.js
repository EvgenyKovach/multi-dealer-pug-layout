const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

	entry: {
		app: path.resolve(__dirname, './app/site/src/js/app.js'),
	},
	output: {
		path: path.resolve(__dirname, './app/site/dist/js'),
		filename: '[name].js',
	},

	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			// CSS, PostCSS, Sass
			{
				test: /\.(scss|css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '../css/[name].css'
		})
	],

}