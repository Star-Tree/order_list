module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/order_list/' : '/',

  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/all.scss";`
      }
    }
  }
};