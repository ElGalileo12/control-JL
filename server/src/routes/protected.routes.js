import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "La ruta protegida es correcta",
    user: req.user,
  });
});

export default router;
