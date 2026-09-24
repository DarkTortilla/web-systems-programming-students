CREATE DATABASE pos;

--\connect pos postgress
USE DATABASE pos; --mariadb o mysql

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INTEGER NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    description VARCHAR(500) NOT NULL,
    brand VARCHAR(100),
    img TEXT
);

CREATE TABLE user_phone (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(15) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE carts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE cart_item (
    cart_id INTEGER NOT NULL REFERENCES carts(id),
    product_id INTEGER NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL,
    PRIMARY KEY (cart_id, product_id)
);

INSERT INTO users (name, last_name, age, email, role, password) VALUES
    ('Ana', 'Lopez', 22, 'ana.lopez@example.com', 'customer', 'password123'),
    ('Bruno', 'Martinez', 28, 'bruno.martinez@example.com', 'customer', 'password123'),
    ('Carla', 'Hernandez', 31, 'carla.hernandez@example.com', 'admin', 'password123'),
    ('Diego', 'Ramirez', 25, 'diego.ramirez@example.com', 'customer', 'password123'),
    ('Elena', 'Torres', 27, 'elena.torres@example.com', 'customer', 'password123'),
    ('Fernando', 'Gomez', 35, 'fernando.gomez@example.com', 'customer', 'password123'),
    ('Gabriela', 'Sanchez', 24, 'gabriela.sanchez@example.com', 'customer', 'password123'),
    ('Hector', 'Diaz', 29, 'hector.diaz@example.com', 'customer', 'password123'),
    ('Isabel', 'Cruz', 33, 'isabel.cruz@example.com', 'customer', 'password123'),
    ('Jorge', 'Vargas', 26, 'jorge.vargas@example.com', 'customer', 'password123');

INSERT INTO products (name, price, stock, description, brand, img) VALUES
    ('Laptop Pro 14', 21999.00, 12, 'Laptop de 14 pulgadas para trabajo y estudio.', 'Nova', 'laptop-pro-14.jpg'),
    ('Mouse Inalambrico', 399.00, 45, 'Mouse inalambrico con conexion Bluetooth.', 'Nova', 'mouse-inalambrico.jpg'),
    ('Teclado Mecanico', 1299.00, 20, 'Teclado mecanico con retroiluminacion.', 'Keycraft', 'teclado-mecanico.jpg'),
    ('Monitor 24 Pulgadas', 3299.00, 18, 'Monitor Full HD de 24 pulgadas.', 'Vision', 'monitor-24.jpg'),
    ('Audifonos Bluetooth', 899.00, 35, 'Audifonos Bluetooth con microfono.', 'Soundix', 'audifonos-bluetooth.jpg'),
    ('Webcam Full HD', 749.00, 22, 'Camara web Full HD para videollamadas.', 'Vision', 'webcam-full-hd.jpg'),
    ('Disco SSD 1TB', 1599.00, 16, 'Unidad de estado solido de un terabyte.', 'Datafast', 'ssd-1tb.jpg'),
    ('Memoria USB 64GB', 199.00, 60, 'Memoria USB de 64 GB.', 'Datafast', 'usb-64gb.jpg'),
    ('Base para Laptop', 549.00, 30, 'Base ajustable de aluminio para laptop.', 'Deskpro', 'base-laptop.jpg'),
    ('Cargador USB C', 459.00, 40, 'Cargador USB C de carga rapida.', 'Powerup', 'cargador-usb-c.jpg'),
    ('Cable HDMI', 249.00, 55, 'Cable HDMI de dos metros.', 'Connect', 'cable-hdmi.jpg'),
    ('Router WiFi 6', 1899.00, 14, 'Router WiFi 6 de doble banda.', 'Netlink', 'router-wifi-6.jpg'),
    ('Impresora Multifuncional', 2799.00, 10, 'Impresora con escaner y copiado.', 'Printmax', 'impresora.jpg'),
    ('Silla de Oficina', 3499.00, 8, 'Silla ergonomica para oficina.', 'Comfort', 'silla-oficina.jpg'),
    ('Escritorio Compacto', 2499.00, 11, 'Escritorio compacto de madera.', 'Deskpro', 'escritorio.jpg'),
    ('Lampara LED', 379.00, 32, 'Lampara LED de escritorio.', 'Lumen', 'lampara-led.jpg'),
    ('Bocina Portatil', 699.00, 26, 'Bocina portatil con Bluetooth.', 'Soundix', 'bocina-portatil.jpg'),
    ('Smartwatch Fit', 1499.00, 19, 'Reloj inteligente con monitor de actividad.', 'Pulse', 'smartwatch-fit.jpg'),
    ('Tablet 10 Pulgadas', 4999.00, 13, 'Tablet de 10 pulgadas con pantalla HD.', 'Nova', 'tablet-10.jpg'),
    ('Mochila para Laptop', 799.00, 24, 'Mochila acolchada para laptop de 15 pulgadas.', 'Carry', 'mochila-laptop.jpg'),
    ('Regleta Electrica', 299.00, 38, 'Regleta con seis contactos.', 'Powerup', 'regleta.jpg'),
    ('Adaptador USB C', 329.00, 42, 'Adaptador USB C a HDMI.', 'Connect', 'adaptador-usb-c.jpg'),
    ('Microfono USB', 1099.00, 17, 'Microfono USB para llamadas y grabacion.', 'Soundix', 'microfono-usb.jpg'),
    ('Soporte para Monitor', 649.00, 21, 'Soporte ajustable para monitor.', 'Deskpro', 'soporte-monitor.jpg'),
    ('Limpiador de Pantalla', 159.00, 50, 'Kit para limpiar pantallas.', 'Cleanit', 'limpiador-pantalla.jpg');

INSERT INTO carts (user_id) VALUES
    (1), (2), (4), (6), (8);

INSERT INTO cart_item (cart_id, product_id, quantity) VALUES
    (1, 1, 1), (1, 2, 2), (1, 10, 1),
    (2, 3, 1), (2, 5, 1), (2, 11, 2),
    (3, 4, 1), (3, 7, 1), (3, 9, 1),
    (4, 13, 1), (4, 16, 2), (4, 20, 1),
    (5, 18, 1), (5, 21, 1), (5, 23, 1);
