const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {
        test: /\.styl$/,
        use: [
                {
                  loader:'style-loader'
                },
                {
                  loader: 'typings-for-css-modules-loader',
                  options: {
                    modules: true,
                    namedExport: 'camelCase',
                    camelCase: true
                  }
                },
                {
                  loader: 'stylus-loader'
                }
              ],
      },
      {
        test: /(\.ts|\.tsx)/,
        loader: "awesome-typescript-loader",
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          path.resolve(__dirname, "node_modules")
        ]
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      flow: path.resolve(__dirname, 'src/flow/'),
    },
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
}