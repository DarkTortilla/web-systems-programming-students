-- MySQL: base de datos y datos de ejemplo para los modelos User y Product.
-- Configura DB_NAME=pos_repaso en el archivo .env del backend.
-- Ejecuta el script una sola vez en una base de datos nueva.
CREATE DATABASE `pos_repaso` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `pos_repaso`;

CREATE TABLE `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `lastName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'customer') DEFAULT 'customer',
  `age` SMALLINT NOT NULL,
  `isActive` TINYINT(1) DEFAULT 0,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `price` FLOAT NOT NULL,
  `stock` INT NOT NULL,
  `imageUrl` VARCHAR(255) NOT NULL,
  `isActive` TINYINT(1) DEFAULT 1,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
);

-- Contraseñas de ejemplo en texto plano, como las guarda el controlador actual.
-- Son únicamente para datos de práctica.
INSERT INTO `Users` (`name`, `lastName`, `email`, `password`, `role`, `age`, `isActive`, `createdAt`, `updatedAt`)
VALUES
  ('Ana', 'García', 'ana@example.com', 'Ejemplo123', 'admin', 28, 1, NOW(), NOW()),
  ('Luis', 'Pérez', 'luis@example.com', 'Ejemplo123', 'customer', 24, 1, NOW(), NOW()),
  ('María', 'López', 'maria@example.com', 'Ejemplo123', 'customer', 31, 1, NOW(), NOW());

INSERT INTO `Products` (`name`, `description`, `price`, `stock`, `imageUrl`, `isActive`, `createdAt`, `updatedAt`)
VALUES
  ('Arroz blanco 1 kg', 'Arroz blanco para preparar en casa.', 32.50, 50, 'https://placehold.co/600x400?text=Arroz', 1, NOW(), NOW()),
  ('Frijol negro 1 kg', 'Frijol negro seco.', 45.00, 40, 'https://placehold.co/600x400?text=Frijol', 1, NOW(), NOW()),
  ('Pasta espagueti 500 g', 'Pasta de trigo para espagueti.', 24.90, 35, 'https://placehold.co/600x400?text=Pasta', 1, NOW(), NOW()),
  ('Leche entera 1 L', 'Leche entera de vaca.', 28.50, 30, 'https://placehold.co/600x400?text=Leche', 1, NOW(), NOW()),
  ('Café molido 250 g', 'Café tostado y molido.', 89.00, 20, 'https://placehold.co/600x400?text=Cafe', 1, NOW(), NOW()),
  ('Avena integral 500 g', 'Hojuelas de avena integral.', 38.00, 25, 'https://placehold.co/600x400?text=Avena', 1, NOW(), NOW());
