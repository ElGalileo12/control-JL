import { Router } from "express";
import {
  getUserByEmailController,
  loginController,
} from "../controllers/auth.controller.js";

const router = Router();

router.get("/user/:email", getUserByEmailController);

router.post("/login", loginController);

export default router;
