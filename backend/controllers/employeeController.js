const db = require("../config/db");

exports.getEmployees =
async(req,res)=>{

    const [rows] =
    await db.execute(
        "SELECT * FROM employees"
    );

    res.json(rows);
};

exports.addEmployee =
async(req,res)=>{

    const {
        employee_code,
        name,
        email,
        department,
        designation,
        salary
    } = req.body;

    await db.execute(
    `INSERT INTO employees
    (
        employee_code,
        name,
        email,
        department,
        designation,
        salary
    )
    VALUES(?,?,?,?,?,?)`,
    [
        employee_code,
        name,
        email,
        department,
        designation,
        salary
    ]);

    res.json({
        message:
        "Employee Added"
    });
};

exports.deleteEmployee =
async(req,res)=>{

    await db.execute(
    "DELETE FROM employees WHERE id=?",
    [req.params.id]);

    res.json({
        message:
        "Deleted Successfully"
    });
};

exports.updateEmployee =
async(req,res)=>{

    const {
        employee_code,
        name,
        email,
        department,
        designation,
        salary
    } = req.body;

    await db.execute(
    `UPDATE employees
     SET
     employee_code=?,
     name=?,
     email=?,
     department=?,
     designation=?,
     salary=?
     WHERE id=?`,
    [
        employee_code,
        name,
        email,
        department,
        designation,
        salary,
        req.params.id
    ]);

    res.json({
        message:
        "Employee Updated"
    });
};