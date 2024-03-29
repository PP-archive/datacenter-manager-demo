const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:3000',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        //bundle the client for hot reloading
        //only- means to only hot reload for successful updates
        './app/index.js'],
    output: {
        filename: 'bundle.js',
        sourceMapFilename: 'bundle.map',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        port: 3000,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['es2015', { 'modules': false }], 'react'],
                            plugins: ['transform-async-to-generator',
                                'transform-decorators-legacy',
                                'transform-object-rest-spread',
                                'transform-runtime',
                                'react-html-attrs',
                                'react-hot-loader/babel'],
                        }
                    }
                ]
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|gif|jpg|png)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: "body"
        }),
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map'
}