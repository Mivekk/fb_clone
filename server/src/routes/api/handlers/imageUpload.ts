import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";
import s3Client from "../../../aws/s3";

export const imageUpload = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const file = req.file;
  if (!file) {
    return;
  }

  const key = v4();
  const params = {
    Bucket: "fb_clone",
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    s3Client.send(new PutObjectCommand(params));
  } catch (err) {
    console.log("Error", err);
    return;
  }

  res.send({ image_url: "http://localhost:5000/fb_clone/" + key });
};
