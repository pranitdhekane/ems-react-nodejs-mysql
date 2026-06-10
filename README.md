# Employee Management System (EMS)

A full-stack Employee Management System built using React, Node.js, Express, MySQL, and JWT Authentication.

The application allows administrators to securely manage employee records through a modern web interface. It includes authentication, employee CRUD operations, protected routes, Docker support, and cloud deployment readiness.

---

# Features

## Authentication

* JWT Authentication
* Protected Routes
* Secure API Access
* Environment Variable Management

## Employee Management

* Add Employee
* View Employees
* Search Employees
* Update Employee Details
* Delete Employees

## Dashboard

* Employee Statistics
* Sidebar Navigation
* Responsive User Interface

## Database Operations

* Create Records
* Read Records
* Update Records
* Delete Records

---

# Technology Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* React Icons

## Backend

* Node.js
* Express.js
* JWT
* bcryptjs
* mysql2

## Database

* MySQL

## DevOps

* Docker
* Docker Compose
* Git
* GitHub

## Cloud Ready

* AWS EC2
* AWS RDS
* AWS S3
* Nginx

---

# Project Structure

```text
employee-management-app/

├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

---

# Local Installation

## Clone Repository

```bash
git clone https://github.com/your-username/employee-management-app.git

cd employee-management-app
```

---

# Database Setup

Login to MySQL:

```bash
mysql -u root -p
```

Create database:

```sql
CREATE DATABASE employee_db;
```

Use database:

```sql
USE employee_db;
```

Create Employees Table:

```sql
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    employee_code VARCHAR(20) UNIQUE,
    name VARCHAR(100),
    email VARCHAR(100),
    department VARCHAR(50),
    designation VARCHAR(50),
    salary DECIMAL(10,2),
    photo_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

Create Users Table:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(20) DEFAULT 'admin'
);
```

---

# Generate JWT Secret

Generate a secure JWT Secret:

```bash
openssl rand -base64 32
```

Example:

```text
JWT_SECRET=4Wj3g3f5RjX5v6oYj2D3j8sJz7jJz0sM4qVnJ6hR4vQ=
```

---

# Generate Admin Password Hash

Navigate to backend folder:

```bash
cd backend
```

Generate hash:

```bash
node -e "const bcrypt=require('bcryptjs'); console.log(bcrypt.hashSync('Admin@123',10));"
```

Example Output:

```text
$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy
```

Copy the generated hash.

---

# Create Admin User

Insert admin user:

```sql
INSERT INTO users
(
    name,
    email,
    password,
    role
)
VALUES
(
    'Administrator',
    'admin@example.com',
    '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
    'admin'
);
```

---

# Backend Environment Variables

Create:

```text
backend/.env
```

```env
PORT=5001

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employee_db

JWT_SECRET=your_generated_secret
```

---

# Start Backend

```bash
cd backend

npm install

npm start
```

Backend URL:

```text
http://localhost:5001
```

---

# Start Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# Login Credentials

```text
Email:
admin@example.com

Password:
Admin@123
```

---

# Docker Deployment

## Build Images

```bash
docker compose build
```

---

## Start Containers

```bash
docker compose up -d
```

---

## Verify Running Containers

```bash
docker ps
```

Expected:

```text
ems-frontend
ems-backend
ems-mysql
```

---

## Stop Containers

```bash
docker compose down
```

---

# Multi-Stage Docker Build

The project uses multi-stage Docker builds to:

* Reduce image size
* Improve security
* Separate build and runtime environments
* Improve deployment speed

---

# API Endpoints

## Authentication

### Login

```http
POST /api/auth/login
```

Request:

```json
{
  "email":"admin@example.com",
  "password":"Admin@123"
}
```

---

## Employees

### Get Employees

```http
GET /api/employees
```

### Add Employee

```http
POST /api/employees
```

### Update Employee

```http
PUT /api/employees/:id
```

### Delete Employee

```http
DELETE /api/employees/:id
```

---

# JWT Authentication Flow

```text
User Login
    ↓
Backend Validates Credentials
    ↓
JWT Token Generated
    ↓
Frontend Stores Token
    ↓
Token Sent With Every API Request
    ↓
Backend Verifies Token
    ↓
Access Granted
```

---

# Security Features

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Environment Variables
* No Plain Text Password Storage
* Docker Multi-Stage Builds

---

# Future Enhancements

* Employee Photo Upload
* AWS S3 Integration
* Role-Based Access Control (RBAC)
* GitHub Actions CI/CD
* AWS EC2 Deployment
* AWS RDS Integration
* Kubernetes Deployment
* Employee Attendance Module
* Payroll Module

---

# Author

Pranit Dhekane

AWS | Linux | Docker | DevOps Enthusiast

---

# License

This project is created for learning, portfolio, and demonstration purposes.

