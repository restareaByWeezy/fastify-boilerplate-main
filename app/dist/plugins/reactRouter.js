import { reactRouterFastify } from "@mcansh/remix-fastify/react-router";
import fp from "fastify-plugin";
var reactRouter_default = fp(
  async (app) => {
    await app.register(reactRouterFastify, {
      buildDirectory: "./dist/web",
      async getLoadContext(req) {
        return { app, req };
      }
    });
  },
  {
    name: "reactRouter",
    dependencies: ["app.env", "app.gracefulShutdown"]
  }
);
export {
  reactRouter_default as default
};
