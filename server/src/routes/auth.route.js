import { Router } from "express";
import { testAuthController } from "../controllers/auth.controller.js";

const router = Router();

router.get("/test", testAuthController);

export default router;
