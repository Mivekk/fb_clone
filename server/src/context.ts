import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const prisma = new PrismaClient();

interface Payload {
  userId: number;
}

export interface ApolloContext {
  prisma: PrismaClient;
  payload?: Payload;
  req: Request;
  res: Response;
}
