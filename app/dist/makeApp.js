import path from "node:path";
import FastifyAutoload from "@fastify/autoload";
import Fastify from "fastify";
async function makeApp() {
  const app = Fastify({
    logger: true
  });
  await app.register(FastifyAutoload, {
    dir: path.resolve("./dist/plugins")
  });
  app.get("/healthz", () => ({
    ok: true
  }));
  await app.ready();
  app.log.info({}, "[system] completed - app.ready()");
  return app;
}
export {
  makeApp
};
