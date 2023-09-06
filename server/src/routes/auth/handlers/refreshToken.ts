import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import prisma from "../../../client";
import { createAccessToken, createRefreshToken } from "../../../auth/auth";
import { sendRefreshToken } from "../../../auth/sendRefreshToken";

export const refreshToken = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
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

  sendRefreshToken(res, createRefreshToken(user));

  return res.send({ accessToken: createAccessToken(user) });
};
