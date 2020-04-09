const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function(app) {
  console.log("proxy")
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true
    })
  );
  app.use(
    "/login",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true,
    })
  );
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://localhost:3001",
      changeOrigin: true
    })
  );
};
