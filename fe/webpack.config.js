const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/js/main.js",
    output: {
        path: path.resolve("./src/js", "dist"),
        filename: "dustApp.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}