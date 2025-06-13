import app from "./app.js";
import { pool } from "./config/db.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});

pool
  .connect()
  .then(() => console.log("✅ Conectado a PostgreSQL"))
  .catch((err) => console.error("❌ Error al conectar con PostgreSQL:", err));
