import dotenv from "dotenv";
import mongoose from "mongoose";
import { pool } from "../src/config/db.js";
import { Checkin } from "../src/models/checkin.model.js";

dotenv.config({ path: ".env.docker" });

const MONGO_URI = process.env.MONGODB_URI;

async function getUserIdsFromPostgres() {
  const result = await pool.query("SELECT id FROM users");
  return result.rows.map((row) => row.id);
}

function generateFichajes(userIds) {
  const fichajes = [];

  userIds.forEach((id) => {
    for (let day = 10; day <= 15; day++) {
      const date = `2025-06-${String(day).padStart(2, "0")}`;
      fichajes.push({
        userId: id,
        date,
        startTime: new Date(`${date}T08:00:00Z`),
        endTime: new Date(`${date}T17:00:00Z`),
      });
    }
  });

  return fichajes;
}

async function seedMongoCheckins() {
  try {
    await mongoose.connect(MONGO_URI);

    const userIds = await getUserIdsFromPostgres();
    if (userIds.length === 0) {
      return;
    }

    const checkins = generateFichajes(userIds);

    await Checkin.insertMany(checkins, { ordered: false });

    process.exit(0);
  } catch (err) {
    console.error("Error durante el seeding:", err.message);
    process.exit(1);
  }
}

seedMongoCheckins();
