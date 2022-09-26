/**
 * VARIABLE OR DEPENDENCIES OR PLUGINS
 */
// Webpack Dependencies
const { merge } = require('webpack-merge')

// Common Webpack Config Import
const common_config = require('./webpack.config.common')

/**
 * MODULE FOR EXPORTATION
 */
// Development configuration
module.exports = merge(common_config, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        hot: true,
        devMiddleware: {
            writeToDisk: true
        }
    }
})