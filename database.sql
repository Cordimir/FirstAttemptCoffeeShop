CREATE DATABASE coffee_shop;

USE coffee_shop;

CREATE TABLE menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO menu (name, price) VALUES
('Espresso', 10.00),
('Latte', 15.00),
('Cappuccino', 12.50),
('Mocha', 14.00);
