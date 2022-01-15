const path = require('path');

module.exports = {
    entry: './public/js/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname + '/public/dist/js')
    },
    mode:'development',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
      watch: true
}