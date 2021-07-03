module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "production-path" : "/",
  configureWebpack: {
    devServer: {
      headers: { "Access-Control-Allow-Origin": "*" },
    },
  },
  devServer: {
    proxy: "http://localhost:5000",
  },
  // devServer: {
  //   proxy: {
  //     "^/api": {
  //       target: "http://localhost:5000",
  //       prependPath: true,
  //       changeOrigin: false,
  //       // logLevel: "debug",
  //       // pathRewrite: { "^/api": "/" },
  //     },
  //   },
  // },
};
