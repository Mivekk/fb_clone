import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

interface Payload {
  userId: number;
}

export interface MyApolloContext {
  prisma: PrismaClient;
  payload?: Payload;
  req: Request;
  res: Response;
}

export interface MyApolloSubscriptionContext {
  prisma: PrismaClient;
  payload?: Payload;
}
