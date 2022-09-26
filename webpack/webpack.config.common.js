/**
 * VARIABLE OR DEPENDENCIES OR PLUGINS
 */

// Node Depedndecies
const path = require('path')
const glob = require('glob')

// Webpack Dedepencies
const Webpack = require('webpack')

// Webpack Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
/**
 * FUNCTIONS
 */

/**
 * Find entry point object
 * @returns {entries}
 */
const getEntryObject = () => {
    let entries = {}

    glob.sync(path.join(__dirname, '../src/application/*.js')).forEach((file_path) => {
        const name = path.basename(file_path, '.js')
        entries[name] = file_path
    })

    return entries
}

/**
 * MODULE FOR EXPORTATION
 */
// Common Webpack setting to exports
module.exports = {
    entry: getEntryObject(),
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, '../public'),
        publicPath: '/static/',
        clean: true
    },
    plugins: [
        new Webpack.DefinePlugin({}),
        new Webpack.ProvidePlugin({}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'assets', to: 'assets'}
            ]
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            // Loader for HTML files
            {test: /\.html$/i, loader: "html-loader" },
            // Loader for Styling files (CSS or SCSS or SASS)
            {test: /\.s?(a|c)ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]},
            // Loader for Javascript
            {test: /\.js$/i, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}