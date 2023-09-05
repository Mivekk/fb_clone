import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import argon2 from "argon2";
import prisma from "../client";
import { createAccessToken, createRefreshToken } from "../auth/auth";
import { sendRefreshToken } from "../auth/sendRefreshToken";

export const googleAuthRoute = async (req: Request, res: Response) => {
  if (!req.headers.authorization) {
    throw new Error("authorization header not provided");
  }

  let payload: any = null;
  try {
    payload = decode(req.headers.authorization);
  } catch (err) {
    console.log(err);

    return res.send({ accessToken: "" });
  }

  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (!user) {
    const hashedPassword = await argon2.hash(payload.sub);

    const newUser = await prisma.user.create({
      data: {
        firstName: payload.given_name,
        lastName: payload.family_name,
        email: payload.email,
        password: hashedPassword,
      },
    });

    if (!newUser) {
      return res.send({ accessToken: "" });
    }

    return res.send({ user: newUser, accessToken: createAccessToken(newUser) });
  }

  const passwordsMatch = await argon2.verify(user.password, payload.sub);

  if (!passwordsMatch) {
    return res.send({ accessToken: "" });
  }

  sendRefreshToken(res, createRefreshToken(user));

  return res.send({ user, accessToken: createAccessToken(user) });
};
