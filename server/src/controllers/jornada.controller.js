import { Checkin } from "../models/checkin.model.js";
import dayjs from "dayjs";

export async function startJornadaController(req, res) {
  const userId = req.user.id;
  const date = dayjs().format("YYYY-MM-DD");
  const now = new Date();

  try {
    const existing = await Checkin.findOne({ userId, date });

    if (existing) {
      return res.status(400).json({ message: "Ya iniciste tu jornada" });
    }

    const checkin = await Checkin.create({
      userId,
      date,
      startTime: now,
    });

    res.status(201).json({ message: "Iniciaste jornada", data: checkin });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al iniciar la jornada", error: error.message });
  }
}

export async function endJornadaController(req, res) {
  const userId = req.user.id;
  const date = dayjs().format("YYYY-MM-DD");
  const now = new Date();

  try {
    const jornada = await Checkin.findOne({ userId, date });

    if (!jornada) {
      return res.status(404).json({ message: "No has iniciado la jornada" });
    }

    if (jornada.endTime) {
      return res.status(400).json({ message: "Finalizaste tu jornada" });
    }

    jornada.endTime = now;
    await jornada.save();

    res.status(200).json({ message: "Jornada finalizada", data: jornada });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al finalizar jornada", error: error.message });
  }
}

export async function getJornadasController(req, res) {
  const userId = req.user.id;
  const { from, to } = req.query;

  const filters = { userId };

  if (from && to) {
    filters.date = { $gte: from, $lte: to };
  } else if (from) {
    filters.date = { $gte: from };
  } else if (to) {
    filters.date = { $lte: to };
  }

  try {
    const jornadas = await Checkin.find(filters).sort({ date: -1 });
    res.status(200).json(jornadas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener jornadas", error: error.message });
  }
}
