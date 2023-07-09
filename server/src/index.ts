import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { json } from "body-parser";
import { expressMiddleware } from "@apollo/server/express4";
import { MyApolloContext } from "./context";
import { UserResolver } from "./resolvers/User";
import { resolvers } from "./generated/type-graphql";
import prisma from "./client";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import { createAccessToken } from "./auth/auth";
import { sendRefreshToken } from "./auth/sendRefreshToken";

const main = async () => {
  const app = express();
  const port = 4000;

  app.use(cookieParser());

  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.fbc;
    if (!token) {
      return res.send({ accessToken: "" });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ accessToken: "" });
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });
    if (!user) {
      return res.send({ accessToken: "" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ accessToken: "" });
    }

    sendRefreshToken(res, createAccessToken(user));

    return res.send({ accessToken: createAccessToken(user) });
  });

  const schema = await buildSchema({
    resolvers: [...resolvers, UserResolver],
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
