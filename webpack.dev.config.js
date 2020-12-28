const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');

const PATHS = {
    src: path.join(__dirname, './app/site/src'),
    dist: path.join(__dirname, './app/site/dist'),
};

const PAGES_DIR = `${PATHS.src}/template/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
    mode: 'development',
    watch: true,

    entry: {
        app: path.resolve(__dirname, './app/site/src/js/app.js'),
    },

    output: {
        path: path.resolve(__dirname, './app/site/dist'),
        publicPath: '',
        filename: './js/[name].js',
    },

    module: {
        rules: [
            {
                test: /\.pug$/,
                use: 'pug-loader',
            },
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            }, // CSS, PostCSS, Sass
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]',
                    },
                ],
            },
        ],
    },

    devServer: {
        index: '/templates/index.html',
        port: 8800,
        historyApiFallback: true,
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new RemovePlugin({
            watch: {
                include: ['./app/site/dist'],
                exclude: ['./app/site/dist/img/spritemap.svg'],
            },
        }),

        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),

        ...PAGES.map(
            page =>
                new HtmlWebpackPlugin({
                    template: `${PAGES_DIR}/${page}`,
                    filename: `./templates/${page.replace(/\.pug/, '.html')}`,
                })
        ),

        new CopyPlugin({
            patterns: [
                { from: './app/site/src/img', to: 'img' },
                { from: './app/site/src/fonts', to: 'css/fonts' },
            ],
        }),
    ],
};
