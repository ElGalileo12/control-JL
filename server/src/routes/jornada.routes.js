import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

import {
  startJornadaController,
  endJornadaController,
  getJornadasController,
} from "../controllers/jornada.controller.js";

const router = Router();

router.post("/start", authMiddleware, startJornadaController);
router.post("/end", authMiddleware, endJornadaController);
router.get("/", authMiddleware, getJornadasController);

export default router;
