module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        store: "@/store"
      }
    }
  }
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "//152.136.185.210:7878/api/hy66",
  //       changeOrigin: true,
  //       // pathRewrite: { "^/api": "" }
  //     }
  //   }
  // }
};
