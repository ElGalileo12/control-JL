import express from "express";
import auth from "./auth.route.js";
import protectedRoutes from "./protected.routes.js";

function routes(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/auth", auth);
  router.use("/protected", protectedRoutes);
}

export default routes;
