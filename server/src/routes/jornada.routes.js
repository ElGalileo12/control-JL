import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

import {
  startJornadaController,
  endJornadaController,
} from "../controllers/jornada.controller.js";

const router = Router();

router.post("/start", authMiddleware, startJornadaController);
router.post("/end", authMiddleware, endJornadaController);

export default router;
