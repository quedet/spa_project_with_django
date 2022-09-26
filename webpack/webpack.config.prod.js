/**
 * VARIABLE OR DEPENDENCIES OR PLUGINS
 */
// Webpack Dependencies
const { merge } = require('webpack-merge')

// Webpack Plugins
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

// Common Webpack Config Import
const common_config = require('./webpack.config.common')

/**
 * MODULE FOR EXPORTATION
 */
// Development configuration
module.exports = merge(common_config, {
    mode: "production",
    target: "web",
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin,
            new HtmlMinimizerPlugin,
            new TerserPlugin
        ]
    }
})