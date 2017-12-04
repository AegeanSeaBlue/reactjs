require('shelljs/global');
const webpack = require('webpack');
const webpackConfig = require('./webpack-production.config');
const ora = require('ora');
const path = require('path');
let spinner = ora('Building the production environment (uncompressed code)...');

const distPath = path.resolve(__dirname, '../dist');
rm('-rf', distPath)
mkdir('-p', distPath)
cp('-R', './static', distPath)

spinner.start();
webpack(webpackConfig,function(err, stats){
    spinner.stop();
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
});