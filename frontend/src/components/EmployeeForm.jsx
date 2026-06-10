import { useState } from "react";
import api from "../services/api";

export default function EmployeeForm() {

  const [form, setForm] = useState({
    employee_code: "",
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: ""
  });

  const submit = async (e) => {

    e.preventDefault();

    await api.post("/employees", form);

    alert("Employee Added Successfully");

    window.location.reload();
  };

  return (

    <form
      onSubmit={submit}
      className="
      bg-white/10
      backdrop-blur-xl
      rounded-3xl
      p-6
      mb-6
      "
    >

      <h2 className="text-white text-2xl mb-4">
        Add Employee
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <input
          placeholder="Employee Code"
          className="p-3 rounded-xl"
          onChange={(e)=>
          setForm({
            ...form,
            employee_code:e.target.value
          })}
        />

        <input
          placeholder="Name"
          className="p-3 rounded-xl"
          onChange={(e)=>
          setForm({
            ...form,
            name:e.target.value
          })}
        />

        <input
          placeholder="Email"
          className="p-3 rounded-xl"
          onChange={(e)=>
          setForm({
            ...form,
            email:e.target.value
          })}
        />

        <input
          placeholder="Department"
          className="p-3 rounded-xl"
          onChange={(e)=>
          setForm({
            ...form,
            department:e.target.value
          })}
        />

        <input
          placeholder="Designation"
          className="p-3 rounded-xl"
          onChange={(e)=>
          setForm({
            ...form,
            designation:e.target.value
          })}
        />

        <input
          placeholder="Salary"
          className="p-3 rounded-xl"
          onChange={(e)=>
          setForm({
            ...form,
            salary:e.target.value
          })}
        />

      </div>

      <button
        className="
        mt-4
        bg-blue-600
        text-white
        px-6
        py-3
        rounded-xl
        "
      >
        Save Employee
      </button>

    </form>

  );
}