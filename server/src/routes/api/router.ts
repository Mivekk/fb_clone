import express from "express";
import { imageUpload } from "./handlers/imageUpload";
import { refreshToken } from "./handlers/refreshToken";
import { googleAuth } from "./handlers/googleAuth";

const router = express.Router();

router.post("/image-upload", imageUpload);

router.post("/auth/refresh-token", refreshToken);

router.post("/auth/google", googleAuth);

export default router;
