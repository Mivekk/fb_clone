import "reflect-metadata";
import "dotenv/config";

import cookieParser from "cookie-parser";
import cors from "cors";
import express, { json } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import S3rver from "s3rver";
import fs from "fs";

import prisma from "./client";
import apiRouter from "./routes/api/router";
import { MyApolloContext, MyApolloSubscriptionContext } from "./context";
import { createSchema } from "./schema";

const main = async () => {
  const app = express();
  const httpServer = createServer(app);

  app.use(
    cookieParser(),
    cors({ credentials: true, origin: ["http://localhost:3000"] }),
    json()
  );

  const wsServer = new WebSocketServer({
    server: httpServer,
    path: "/graphql",
  });

  const schema = await createSchema();

  const serverCleanup = useServer(
    {
      schema,
      context: async (): Promise<MyApolloSubscriptionContext> => ({
        prisma,
      }),
    },
    wsServer
  );

  const server = new ApolloServer<MyApolloContext>({
    schema,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart() {
          return {
            async drainServer() {
              await serverCleanup.dispose();
            },
          };
        },
      },
    ],
  });

  await server.start();

  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req, res }): Promise<MyApolloContext> => ({
        prisma,
        req,
        res,
      }),
    })
  );

  const s3rver = new S3rver({
    port: 5000,
    directory: "./s3",
  });

  await s3rver.run();

  app.use("/api", apiRouter);

  const PORT = 4000;
  httpServer.listen(PORT, () => {
    console.log("Server started on port", PORT);
  });
};

main();
