import { NextFunction, Request, Response } from "express";
import prisma from "../../../client";
import { createAccessToken, createRefreshToken } from "../../../auth/auth";
import { sendRefreshToken } from "../../../auth/sendRefreshToken";
import { OAuth2Client, TokenPayload } from "google-auth-library";

export const googleAuth = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const { credential, clientId } = req.body;

  if (clientId !== process.env.GOOGLE_CLIENT_ID) {
    throw new Error("invalid client id");
  }

  let payload: TokenPayload | undefined = undefined;
  const client = new OAuth2Client();
  try {
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: clientId,
    });

    payload = ticket.getPayload();

    if (!payload) {
      return res.send({ accessToken: "" });
    }
  } catch (err) {
    console.log(err);

    return res.send({ accessToken: "" });
  }

  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  // new user
  if (!user) {
    try {
      const createdUser = await prisma.user.create({
        data: {
          firstName: payload.given_name!,
          lastName: payload.family_name!,
          email: payload.email!,
          image_url: payload.picture,
          external_id: payload.sub,
          external_type: "GOOGLE",
        },
      });

      sendRefreshToken(res, createRefreshToken(createdUser));

      return res.send({ accessToken: createAccessToken(createdUser) });
    } catch (err) {
      console.log(err);

      return res.send({ accessToken: "" });
    }
  }

  // link profiles
  if (user.external_type !== "GOOGLE") {
    return res.send({ accessToken: "" });
  }

  // existing user
  if (user.external_id === payload.sub) {
    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ accessToken: createAccessToken(user) });
  }

  return res.send({ accessToken: "" });
};
