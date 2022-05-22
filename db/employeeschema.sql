DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;
CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
)

CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    INDEX department_index(department_id),
    CONSTRAINT key_department FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE CASCADE 
)

CREATE TABLE employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    INDEX role_index(role_id),
    CONSTRAINT key_role FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    INDEX manager_index(manager_id),
    CONSTRAINT key_manager FOREIGN KEY(manager_id) REFERENCES employee(id) ON DELETE SET NULL
)