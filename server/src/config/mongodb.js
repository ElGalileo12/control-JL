import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Se conecta a Mongo");
  } catch (error) {
    console.error("Error al conectar Mongo", error);
  }
}
