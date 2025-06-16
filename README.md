# 📋 Control de Jornada Laboral

Aplicación full stack para el control de jornada laboral, desarrollada como parte de una prueba técnica. Utiliza React (Vite) para el frontend, Express con Node.js para el backend, PostgreSQL para la gestión de usuarios y MongoDB para registrar los fichajes de entrada/salida.

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

- Tener [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) instalados.

### 1. Clonar el repositorio

```bash
git clone https://github.com/ElGalileo12/control-JL.git
cd proyecto-control-jornada
```

### 2. Levantar los servicios con Docker Compose

```bash
docker-compose up --build -d
```

Esto iniciará automáticamente:

frontend: Aplicación React con Vite servida por Nginx.

backend: API REST con Express.

postgres: Base de datos para usuarios.

mongo: Base de datos para los fichajes (entradas/salidas).

Asegúrate de que los puertos 5173, 3000, 5432 y 27017 estén libres en tu máquina.

## Usuarios de ejemplo

usuario 1: empleado1@empresa.com contraseña: admin123 

usuario 2: empleado2@empresa.com contraseña: user123 

## URLs de los servicios

Frontend: http://localhost:5173

Backend (API): http://localhost:3000/api/v1

PostgreSQL: localhost:5432

MongoDB: localhost:27017

## Apagar los servicios

```bash
docker compose down -v --rmi all
```

## Notas adicionales

La autenticación se realiza mediante JWT, guardando el token en localStorage.
El sistema está preparado para registrar el fichaje de entrada y salida por cada usuario.
Se pueden filtrar por días los registros realizados.
