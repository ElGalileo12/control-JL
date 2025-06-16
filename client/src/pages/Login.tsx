import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import bgOficina from "../assets/oficina.jpg";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!password) return setError("Por favor ingresa la contraseña");
    try {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        login(data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Credenciales inválidas");
      }
    } catch (error) {
      setError("Contraseña incorrecta");
    }
  };

  return (
    <>
      <section
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
        style={{
          backgroundImage: `url(${bgOficina})`,
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-20 bg-white bg-opacity-90 max-w-lg w-full rounded-2xl shadow-lg p-8 text-center space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-orange-900">
              Bienvenido al control de jornada laboral
            </h1>
          </div>

          <div className="bg-orange-900 rounded-full inline-block px-6 py-1 text-white text-lg font-semibold">
            <p>INICIO DE SESIÓN</p>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="relative">
              <UserIcon className="absolute w-5 h-5 text-orange-700 left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="email"
                autoComplete="email"
                value={email}
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-md bg-orange-50 border border-orange-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-700 text-orange-800 placeholder:text-orange-800"
              />
            </div>

            <div className="relative">
              <LockClosedIcon className="absolute w-5 h-5 text-orange-700 left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                className={`w-full pl-10 pr-4 py-2 bg-orange-50 border border-orange-200 text-orange-800 rounded-md ${
                  error ? "border-red-500" : "border-orange-200"
                } 
                focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent 
                placeholder:text-orange-800`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-900 hover:border-b-orange-900 text-white font-bold py-2 rounded-md transition"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
