
CREATE DATABASE IF NOT EXISTS employee_db;
USE employee_db;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role ENUM('admin','employee'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_code VARCHAR(20) UNIQUE,
    name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(50),
    designation VARCHAR(50),
    salary DECIMAL(10,2),
    photo_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users
(name,email,password,role)
VALUES
(
'Admin',
'admin@example.com',
'$2a$10$DesbW/eHMuLjiSbDI/qzaeT4gTM6BbWQNdqGOOmZrv5p4FV3cLqZe',
'admin'
);
