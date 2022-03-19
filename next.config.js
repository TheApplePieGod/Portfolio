const withPlugins = require('next-compose-plugins');

const env = process.env;
if (env && env.NODE_ENV && env.NODE_ENV !== 'development') {
    isProduction = true;
} else {
    isProduction = false;
}

var config = {
    webpack: (config, options) => {
        return config;
    }
};

const plugins = [];
if (!isProduction) {
    const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: false // Do not leave this on when you don't need it (you will regret it)
    });
    plugins.push([withBundleAnalyzer]);
}

module.exports = withPlugins(plugins, config);