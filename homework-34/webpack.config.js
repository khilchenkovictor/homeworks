const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProd = argv.mode === 'production'

    return {
    mode: isProd ? 'production' : 'development',
    entry: './src/index.js',
        output: {
            filename: 'js/[name].[contenthash].js',
            chunkFilename: 'js/[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Dome',
            template: 'src/index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        })
    ],

        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isProd
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },

                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name].[contenthash][ext]'
                    }
                },

                {
                    test: /\.(woff2?|ttf|otf|eot)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name].[contenthash][ext]'
                    }
                }
            ]
        },

        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    }
                }
            },
            runtimeChunk: 'single'
        },

    resolve: {
        extensions: ['.js'],
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        port: 9000,
        open: true,
        liveReload: true,
    }
    }
};