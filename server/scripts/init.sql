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
  ('Usuario 1', 'usuario1@example.com', '$2a$10$EF7tKjrlkxQCTbyHzKep9ew2O/.zh9jUgyqw2rhHRqQLANdcxTSS2', 'user 1'),
  ('Usuario 2', 'usuario2@example.com', '$2a$10$WczqAtj4Fyl4U.mC.RCCoOzyKCGkzPSmTKzJ9nmuMWd8PMtEU/UiG', 'user 2');
