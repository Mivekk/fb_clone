import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";

import { MyApolloContext } from "../context";

export const isAuth: MiddlewareFn<MyApolloContext> = ({ context }, next) => {
  const authorization = context.req.headers.authorization;

  if (!authorization) {
    throw new Error("not authenticated");
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (err) {
    throw new Error("not authenticated");
  }

  return next();
};
