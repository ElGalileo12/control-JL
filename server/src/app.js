import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./routes/index.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
route(app);

app.get("/", (req, res) => {
  res
    .status(200)
    .send("API de control de jornada laboral funcionando 🚀")
    .end();
});

export default app;
