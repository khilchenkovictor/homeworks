const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, argv) => {
    const isProd = process.env.NODE_ENV === 'production'
    const isAnalyze = process.env.ANALYZE === 'true'

    return {
    mode: isProd ? 'production' : 'development',
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
    entry: './src/index.tsx',
        output: {
            filename: 'js/[name].[contenthash].js',
            chunkFilename: 'js/[name].[contenthash].js',
            path: path.resolve(__dirname, 'dist'),
            clean: true
        },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Demo',
            template: 'src/index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            emitWarning: true,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/public'),
                    to: path.resolve(__dirname, 'dist'),
                },
            ],
        }),
        ...(isAnalyze ? [new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: true,
            reportFilename: 'bundle-report.html',
        })] : []),
    ],

        module: {
            rules: [
                {
                    test: /\.(ts|tsx|js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isProd
                            ? MiniCssExtractPlugin.loader
                            : 'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        }
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
            minimize: isProd,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            drop_console: isProd,
                        },
                        format: {
                            comments: false,
                        },
                    },
                    extractComments: false,
                }),
            ],
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
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
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