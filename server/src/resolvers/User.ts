import argon2 from "argon2";
import {
  Arg,
  Ctx,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";

import { createAccessToken, createRefreshToken } from "../auth/auth";
import { sendRefreshToken } from "../auth/sendRefreshToken";
import { MyApolloContext } from "../context";
import { LoginInput, RegisterInput } from "./utils/inputs";
import { LoginResponse, UserResponseObject } from "./utils/outputs";
import { User } from "../generated/type-graphql";
import { isAuth } from "../middleware/isAuth";

@Resolver()
export class UserResolver {
  @Query(() => User)
  @UseMiddleware(isAuth)
  async me(@Ctx() { prisma, payload }: MyApolloContext) {
    const user = await prisma.user.findUnique({
      where: { id: payload?.userId },
    });

    if (!user) {
      throw new Error("could not find user");
    }

    return user;
  }

  @Mutation(() => UserResponseObject)
  async register(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("data") data: RegisterInput
  ): Promise<UserResponseObject> {
    const userExists = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (userExists) {
      return { error: "user already exists" };
    }

    if (data.firstName.length < 1 || data.lastName.length < 1) {
      return { error: "invalid name" };
    }

    if (!data.email.includes("@")) {
      return { error: "incorrect email" };
    }

    if (data.password.length <= 3) {
      return { error: "invalid password" };
    }

    const hashedPassword = await argon2.hash(data.password);

    const user = await prisma.user.create({
      data: { ...data, password: hashedPassword },
    });

    return { user };
  }

  @Mutation(() => LoginResponse)
  async login(
    @Ctx() { prisma, res }: MyApolloContext,
    @Arg("data") data: LoginInput
  ): Promise<LoginResponse> {
    const user = await prisma.user.findUnique({ where: { email: data.email } });

    if (!user) {
      return { error: "user does not exist" };
    }

    const passwordsMatch = await argon2.verify(user.password, data.password);

    if (!passwordsMatch) {
      return { error: "incorrect password" };
    }

    sendRefreshToken(res, createRefreshToken(user));

    return { user, accessToken: createAccessToken(user) };
  }

  @Mutation(() => Boolean)
  async revokeRefreshToken(
    @Ctx() { prisma }: MyApolloContext,
    @Arg("userId") userId: number
  ): Promise<boolean> {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { tokenVersion: { increment: 1 } },
    });

    if (!user) {
      return false;
    }

    return true;
  }
}
