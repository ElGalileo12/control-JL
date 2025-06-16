import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useAuth } from "../context/AuthContext";
import {
  getJornadas,
  getJornadaDeHoy,
  iniciarJornada,
  finalizarJornada,
} from "../actions/jornada.actions";

export type Jornada = {
  _id: string;
  date: string;
  startTime: string | null;
  endTime: string | null;
};

export default function Dashboard() {
  const { token } = useAuth();
  const [jornadas, setJornadas] = useState<Jornada[]>([]);
  const [jornadaHoy, setJornadaHoy] = useState<Jornada | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cargarJornadaHoy();
    cargarHistorial();
  }, []);

  const cargarJornadaHoy = async () => {
    try {
      const data = await getJornadaDeHoy(token);
      setJornadaHoy(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const cargarHistorial = async () => {
    try {
      const data = await getJornadas(token);
      setJornadas(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleIniciar = async () => {
    try {
      await iniciarJornada(token);
      await cargarJornadaHoy();
      await cargarHistorial();
    } catch (e) {
      alert("Error al iniciar jornada");
    }
  };

  const handleFinalizar = async () => {
    try {
      await finalizarJornada(token);
      await cargarJornadaHoy();
      await cargarHistorial();
    } catch (e) {
      alert("Error al finalizar jornada");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Registro de jornada laboral</h1>

      {loading ? (
        <p>Cargando jornada de hoy...</p>
      ) : (
        <div className="mb-6">
          {jornadaHoy ? (
            jornadaHoy.endTime ? (
              <p className="text-green-600 font-medium">
                ✔ Jornada de hoy finalizada
              </p>
            ) : (
              <button
                onClick={handleFinalizar}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Finalizar jornada
              </button>
            )
          ) : (
            <button
              onClick={handleIniciar}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Iniciar jornada
            </button>
          )}
        </div>
      )}

      <h2 className="text-xl font-semibold mb-2">Historial</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Fecha</th>
            <th className="p-2 border">Hora de inicio</th>
            <th className="p-2 border">Hora de fin</th>
          </tr>
        </thead>
        <tbody>
          {jornadas.map((j) => (
            <tr key={j._id} className="border-t">
              <td className="p-2 border">{j.date}</td>
              <td className="p-2 border">
                {j.startTime ? dayjs(j.startTime).format("HH:mm") : "—"}
              </td>
              <td className="p-2 border">
                {j.endTime ? dayjs(j.endTime).format("HH:mm") : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
