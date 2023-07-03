import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { json } from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import { Context, context } from "./context";
import { UserResolver } from "./resolvers/User";
import { resolvers } from "./generated/type-graphql";

const main = async () => {
  const app = express();
  const port = 4000;

  const schema = await buildSchema({
    resolvers: [...resolvers],
    validate: false,
  });

  const server = new ApolloServer<Context>({
    schema,
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, { context: async () => context })
  );

  app.listen(port, () => {
    console.log("Server started on port", port);
  });
};

main();
