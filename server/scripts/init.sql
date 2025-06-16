CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Crear tabla users
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(20) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar usuarios de prueba
INSERT INTO users (name, email, password, role) VALUES
  ('Usuario 1', 'usuario1@example.com', '$2b$10$LC6qvSJSDd7trgnUAVcKSeZjm0UNSE5vdu0wLRPrn4JFS3mC0CSIW', 'user'),
  ('Usuario 2', 'usuario2@example.com', '$2b$10$yB6qC5bEfa5iTsCsIL.sJu9YyU762cQ3PPEL0gBeZr9OXvm6ENno.', 'user');


-- contraseña Usuario 1: admin123
-- contraseña Usuario 2: user123