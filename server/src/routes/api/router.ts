import express from "express";
import { imageUpload } from "./handlers/imageUpload";

const router = express.Router();

router.post("/image-upload", imageUpload);

export default router;
