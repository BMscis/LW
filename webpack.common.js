const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const glob = require('glob')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
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
                test: [/\.(bin)$/, /\.(png|webp|jpeg|svg|jpg|gif|glb|gltf|hdr)$/],
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
            template:path.resolve(__dirname,"./src/content/html/index.html"),
            filename:"index.html",
            excludeChunks:["store"]
        }),
        new HtmlWebpackPlugin({
            title: "Alumni Store",
            template:path.resolve(__dirname,"./src/content/html/index.html"),
            filename:"alumnistore.html",
            excludeChunks:["home"]
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: ["images"],
            as:"image"
          }),
          new FaviconsWebpackPlugin({
              logo:path.resolve(__dirname,"./src/assets/LAA/favicon.png"),
              favicons:{
                  appName:"Light Academy Alumni Association",
                  appDescription:"Alumni website for the LAAA Kenya.",
                  developerName:"BMscis",
                  developerURL:"https://bmscis.github.io/components/",
                  background:"transparent",
                  theme_color:"#56bfee"
              },
              inject: true,
          }),
          new WebpackManifestPlugin()
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