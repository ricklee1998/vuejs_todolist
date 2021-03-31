module.exports = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: ["style-loader", "css-loader", "postcss-loader"]
  //     }
  //   ]
  // }
  module: {
    // `module.rules`는 1.x의 module.loaders와 동일
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [require('autoprefixer')()]
        }
      }
    ]
  }
}