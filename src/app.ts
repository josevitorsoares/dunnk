import fastify from "fastify";

export const app = fastify();

app.setErrorHandler((error, _, reply) => {
  return reply
    .status(500)
    .send({ message: "Internal Server Error", error: error.message });
});
