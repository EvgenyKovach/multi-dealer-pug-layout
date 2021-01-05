const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
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
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, './app/site/src/js/app.js'),
    },
    output: {
        path: path.resolve(__dirname, './app/site/dist'),
        filename: './js/[name].js',
        publicPath: '',
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
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/img', // file pack output path, is relative path for `dist`
                            publicPath: '/img/', // css file will use, is absolute path for server
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./fonts/[name].[ext]',
                    },
                ],
            },
        ],
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './app/site/src/img', to: 'img' },
                { from: './app/site/src/fonts', to: 'css/fonts' },
            ],
        }),

        new RemovePlugin({
            before: {
                include: ['./app/site/dist'],
            },
        }),
        new SVGSpritemapPlugin({
            sprite: {
                prefix: false,
            },
            output: {
                filename: '../src/img/spritemap.svg',
            },
        }),

        new MiniCssExtractPlugin({
            filename: './css/[name].css',
        }),

        new webpack.ProvidePlugin({
          Swiper: 'swiper/swiper-bundle.min.js',
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
