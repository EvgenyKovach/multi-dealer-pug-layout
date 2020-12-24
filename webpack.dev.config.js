const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const fs = require('fs');

const PATHS = {
    src: path.join(__dirname, './app/site/src'),
    dist: path.join(__dirname, './app/site/dist'),
};

const PAGES_DIR = `${PATHS.src}/template/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, './app/site/src/js/app.js'),
    },
    output: {
        path: path.resolve(__dirname, './app/site/dist'),
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
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            }, // CSS, PostCSS, Sass
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        compress: true,
        writeToDisk: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        ...PAGES.map(
            page =>
                new HtmlWebpackPlugin({
                    template: `${PAGES_DIR}/${page}`,
                    filename: `./templates/${page.replace(/\.pug/, '.html')}`,
                })
        ),
    ],
};
