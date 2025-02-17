import FastifyGracefulShutdown from "fastify-graceful-shutdown";
import fp from "fastify-plugin";
var app_gracefulShutdown_default = fp(
  async (app) => {
    await app.register(FastifyGracefulShutdown);
  },
  { name: "app.gracefulShutdown" }
);
export {
  app_gracefulShutdown_default as default
};
