import express from "express";
import { googleAuth } from "./handlers/googleAuth";
import { refreshToken } from "./handlers/refreshToken";

const router = express.Router();

router.post("/refresh-token", refreshToken);

router.post("/google", googleAuth);

export default router;
