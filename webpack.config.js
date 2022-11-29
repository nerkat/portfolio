const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');

// module exports
module.exports = {
    // entries
    entry: {
        bundle: {
            import: './js/theme.js',
            filename: '../dist/[name].js'
        }
    },
    // module
    module: {
        rules: [
            // typescript
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
            // javascript
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // css
            {
                test: /\.(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        },
                    },
                    'postcss-loader',
                ],
            },
            // sass/scss
            {
                test: /\.(s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // remove empty js files
        new RemoveEmptyScriptsPlugin(),
        // extract css from js files to separate files
        new MiniCssExtractPlugin({
            filename: '../dist/[name].css',
        }),
    ],
    // resolve
    resolve: {
        // extensions
        extensions: ['.scss', '.css', '.js', '.ts'],
    },
    // dev server config 
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
};