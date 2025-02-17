import FastifyEnv from "@fastify/env";
import { Type } from "@sinclair/typebox";
import fp from "fastify-plugin";
const schema = Type.Object({
  COOKIE_SECRET: Type.String()
});
var app_env_default = fp(
  async (app) => {
    await app.register(FastifyEnv, {
      confKey: "env",
      schema,
      data: {
        ...process.env
      }
    });
  },
  { name: "app.env" }
);
export {
  app_env_default as default
};
