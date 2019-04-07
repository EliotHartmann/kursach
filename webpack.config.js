const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin= require('copy-webpack-plugin');

module.exports = {
    entry: [
        "./src/index.js",
        "./src/paper-dashboard-react-master/src/assets/scss/paper-dashboard.scss"
    ],
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/paper-dashboard-react-master/src/assets/scss'),
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader?name=./assets/fonts/[name].[ext]'
                    }
                ]
            }
            // {
            //     test: /\.(gif|img|jpe?g|svg)$/i,
            //     use: [
            //         'file-loader',
            //         {
            //             loader: 'image-webpack-loader',
            //             options: {
            //                 bypassOnDebug: true, // webpack@1.x
            //                 disable: true, // webpack@2.x and newer
            //             },
            //         },
            //     ],
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ExtractTextPlugin({
            filename: './css/style.bundle.css',
            allChunks: true,
        }),
        new CopyWebpackPlugin([{
            from: './src/static/img',
            to: './static/img'
        },
            {
                from: './src/static/favicon',
                to: './static/favicon'
            },
            {
                from: './src/static/svg',
                to: './static/svg'
            }
        ]),
    ],
    devServer: {
        historyApiFallback: true
    },
};
