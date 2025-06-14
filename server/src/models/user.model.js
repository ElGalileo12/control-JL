import { pool } from "../config/db.js";

export async function findUserByEmail(email) {
  const query = "SELECT * FROM users WHERE email = $1 LIMIT 1";
  const values = [email];

  try {
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error al buscar usuario por email:", error);
    throw error;
  }
}
