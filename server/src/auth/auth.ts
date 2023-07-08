import { sign } from "jsonwebtoken";
import { User } from "../generated/type-graphql";

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "1m",
  });
};

export const createRefreshToken = (user: User) => {
  return sign(
    { userId: user.id, tokenVersion: user.tokenVersion },
    process.env.REFRESH_TOKEN_SECRET!,
    {
      expiresIn: "7d",
    }
  );
};
