import express from "express";
import multer from "multer";
import { imageUpload } from "./handlers/imageUpload";
import { refreshToken } from "./handlers/refreshToken";
import { googleAuth } from "./handlers/googleAuth";

const upload = multer();

const router = express.Router();

router.post("/image-upload", upload.single("image"), imageUpload);
router.post("/auth/refresh-token", refreshToken);
router.post("/auth/google", googleAuth);

export default router;
