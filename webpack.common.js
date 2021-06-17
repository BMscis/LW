const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Manifest = require('webpack-manifest-plugin');
const webpack = require('webpack');
const glob = require('glob')

module.exports = {
    target:"web",
    entry:{
        home:glob.sync("./src/content/js/index.js"),
        store:glob.sync("./src/content/js/alumnistorentry.js"),
        style:glob.sync('./src/content/sass/*.scss'),
        //components:glob.sync("./src/content/js/components/*.js"),
    },
    module: {
        rules: [
            //scss
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            //files
            {
                test: [/\.(bin)$/, /\.(png|svg|jpg|gif|glb|gltf|hdr)$/],
                use: [
                    'file-loader',
                ],
            },
            //fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                    loader: 'file-loader',
                    options:{
                        name: '[name]-[hash].[ext]'
                    }
                    }
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Home",
            filename:"index.html",
            excludeChunks:["store"]
        }),
        new HtmlWebpackPlugin({
            title: "Alumni Store",
            filename:"alumnistore.html",
            excludeChunks:["home"]
        })
    ],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'docs'),
    },
    performance:{
        hints:'warning',
        maxEntrypointSize:250000,
        maxAssetSize:250000,
    }
}