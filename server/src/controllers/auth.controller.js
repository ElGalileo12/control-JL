import { findUserByEmail } from "../models/user.model.js";

export async function getUserByEmailController(req, res) {
  const { email } = req.params;

  try {
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al buscar el usuario", error: error.message });
  }
}
