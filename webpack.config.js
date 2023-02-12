const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/script/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: false
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions:
                            {
                                minimize: false,
                                outputStyle: 'expanded'
                            }
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false,
                    },
                }

            },
            {
                test: /\.(png|jpg|svg|gif|ttf|ico|webmanifest)$/i,
                type: 'asset/resource',
                generator: {
                    filename: '[path][name][ext]',
                }
            }
        ],
    },
    devServer: {
        static: './dist',
        open: true,
    },
    optimization: {
        minimize: false,
    }
};

