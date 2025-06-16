import dayjs from "dayjs";

const API_URL = "http://localhost:8080/api/v1/jornada";

export async function getJornadas(token: string) {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error al obtener jornadas");
  return await res.json();
}

export async function getJornadaDeHoy(token: string) {
  const hoy = dayjs().format("YYYY-MM-DD");
  const res = await fetch(`${API_URL}?from=${hoy}&to=${hoy}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error al obtener jornada de hoy");
  const data = await res.json();
  return data[0] || null;
}

export async function iniciarJornada(token: string) {
  const res = await fetch(`${API_URL}/start`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error al iniciar jornada");
}

export async function finalizarJornada(token: string) {
  const res = await fetch(`${API_URL}/end`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Error al finalizar jornada");
}

export async function getJornadasPorRango(
  from: string,
  to: string,
  token: string
) {
  const url = `http://localhost:8080/api/v1/jornada?from=${from}&to=${to}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Error al filtrar jornadas");
  return res.json();
}
