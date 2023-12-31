import argon2 from "argon2";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";

import { verify } from "jsonwebtoken";
import { createAccessToken, createRefreshToken } from "../auth/auth";
import { sendRefreshToken } from "../auth/sendRefreshToken";
import { MyApolloContext, Payload } from "../context";
import { User } from "../generated/type-graphql";
import { isAuth } from "../middleware/isAuth";
import { LoginInput, RegisterInput } from "./utils/inputs";
import { LoginResponseObject, RegisterResponseObject } from "./utils/outputs";

const MAX_INPUT_LENGTH = 32;

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { prisma, req }: MyApolloContext): Promise<User | null> {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return null;
    }

    const token = authorization.split(" ")[1];

    try {
      const payload: Payload = verify(
        token,
        process.env.ACCESS_TOKEN_SECRET!
      ) as any;

      const user = await prisma.user.findUnique({
        where: { id: payload.userId },
      });

      if (!user) {
        return null;
      }

      return user;
    } catch (err) {
      return null;
    }
  }

  @Query(() => User, { nullable: true })
  async user(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("userId") userId: number
  ): Promise<User | null> {
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
      return null;
    }

    return user;
  }

  @Mutation(() => RegisterResponseObject)
  async register(
    @Ctx() { prisma, res }: MyApolloContext,
    @Arg("data") data: RegisterInput
  ): Promise<RegisterResponseObject> {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      return { error: "user already exists" };
    }

    if (
      data.firstName.length < 1 ||
      data.lastName.length < 1 ||
      data.firstName.length > MAX_INPUT_LENGTH ||
      data.lastName.length > MAX_INPUT_LENGTH
    ) {
      return { error: "invalid name" };
    }

    if (!data.email.includes("@")) {
      return { error: "incorrect email" };
    }

    if (data.password.length <= 3 || data.password.length > MAX_INPUT_LENGTH) {
      return { error: "invalid password" };
    }

    const hashedPassword = await argon2.hash(data.password);

    const user = await prisma.user.create({
      data: { ...data, password: hashedPassword },
    });

    sendRefreshToken(res, createRefreshToken(user));

    return { user };
  }

  @Mutation(() => LoginResponseObject)
  async login(
    @Ctx() { prisma, res }: MyApolloContext,
    @Arg("data") data: LoginInput
  ): Promise<LoginResponseObject> {
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user) {
      return { error: "user does not exist" };
    }

    if (!user.password) {
      return { error: "link accounts" };
    }

    const passwordsMatch = await argon2.verify(user.password, data.password);

    if (!passwordsMatch) {
      return { error: "incorrect password" };
    }

    sendRefreshToken(res, createRefreshToken(user));

    return { user, accessToken: createAccessToken(user) };
  }

  @Mutation(() => Boolean)
  @UseMiddleware(isAuth)
  async logout(
    @Ctx() { prisma, res, payload }: MyApolloContext
  ): Promise<boolean> {
    if (!payload?.userId) {
      throw new Error("invalid cookie");
    }

    const user = await prisma.user.update({
      where: { id: payload.userId },
      data: { tokenVersion: { increment: 1 } },
    });

    if (!user) {
      throw new Error("user not found");
    }

    res.clearCookie(process.env.COOKIE_NAME!);

    return true;
  }
}
