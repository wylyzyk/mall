/**
 * @type { import("@vue/cli-service").ServicePlugin }
 */
module.exports = api => {
  api.configureDevServer(app => {
    app.use((req, res, next) => {
      console.log(`[${ req.method.toUpperCase() }] ${ req.url }`);
      next();
    })
  })
}