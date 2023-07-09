import "reflect-metadata";
import "dotenv/config";

import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { json } from "body-parser";
import { buildSchema } from "type-graphql";

import prisma from "./client";
import { refreshToken } from "./routes/refreshToken";
import { UserResolver } from "./resolvers/User";
import { PostResolver } from "./resolvers/Post";
import { CommentResolver } from "./resolvers/Comment";
import { resolvers } from "./generated/type-graphql";
import { MyApolloContext } from "./context";

const main = async () => {
  const app = express();
  const port = 4000;

  app.use(cookieParser());

  app.post("/refresh_token", (req, res) => {
    refreshToken(req, res);
  });

  const schema = await buildSchema({
    resolvers: [...resolvers, UserResolver, PostResolver, CommentResolver],
    validate: false,
  });

  const server = new ApolloServer<MyApolloContext>({
    schema,
  });

  await server.start();

  app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ prisma, req, res }),
    })
  );

  app.listen(port, () => {
    console.log("Server started on port", port);
  });
};

main();
