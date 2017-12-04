const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack-dev.config');
webpackConfig.entry.main.unshift(
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:9993/",
    "webpack/hot/only-dev-server");
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, {
    hot : true,
    inline: true,
    contentBase:'./',
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback:true,
    stats: {
        colors: true
    }
});
server.listen(9993, "127.0.0.1", function() {
    console.log("Starting server on http://localhost:9993");
});