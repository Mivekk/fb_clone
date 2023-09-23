import { Request, Response, NextFunction } from "express";

export const imageUpload = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("image-upload", req.body);
};
