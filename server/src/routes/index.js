import express from "express";
import auth from "./auth.route.js";

function routes(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/auth", auth);
}

export default routes;
