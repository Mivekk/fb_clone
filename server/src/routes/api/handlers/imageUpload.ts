import { PutObjectCommand } from "@aws-sdk/client-s3";
import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";
import s3Client from "../../../aws/s3";
import prisma from "../../../client";

export const imageUpload = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (!req.files) {
    return;
  }

  const files = req.files as {
    [fieldname: string]: Express.Multer.File[];
  };
  const file = files["image"][0];
  const key = v4();

  const { type, id }: { type: "user" | "post" | "comment"; id: number } =
    JSON.parse(req.body.dbData);

  try {
    const update: any = prisma[type].update;

    const result = await update({
      where: { id: id },
      data: { image_url: key },
    });

    console.log(result);
  } catch (err) {
    console.log(err);
    return;
  }

  const params = {
    Bucket: "fb_clone",
    Key: key,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  try {
    await s3Client.send(new PutObjectCommand(params));
  } catch (err) {
    console.log("Error", err);
    return;
  }

  res.send();
};
