import { Router } from "express";
import { getUserByEmailController } from "../controllers/auth.controller.js";

const router = Router();

router.get("/user/:email", getUserByEmailController);

export default router;
