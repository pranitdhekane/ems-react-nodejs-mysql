import { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEdit,
  FaTrash
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import api from "../services/api";

export default function Employees() {

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    employee_code: "",
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: ""
  });

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {

    const res =
      await api.get("/employees");

    setEmployees(res.data);
  };

  const deleteEmployee = async (id) => {

    const confirmDelete =
      window.confirm(
        "Delete this employee?"
      );

    if (!confirmDelete) return;

    try {

      await api.delete(
        `/employees/${id}`
      );

      loadEmployees();

    } catch (error) {

      console.error(error);

      alert("Delete Failed");
    }
  };

  const updateEmployee = async () => {

    try {

      await api.put(
        `/employees/${editing}`,
        form
      );

      setEditing(null);

      loadEmployees();

      alert(
        "Employee Updated Successfully"
      );

    } catch (error) {

      console.error(error);

      alert("Update Failed");
    }
  };

  const filteredEmployees =
    employees.filter(emp =>
      emp.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1
          className="
          text-4xl
          font-bold
          mb-6
          "
        >
          Employees
        </h1>

        <input
          type="text"
          placeholder="🔍 Search Employee..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
          w-full
          p-4
          rounded-2xl
          border
          shadow-sm
          mb-6
          "
        />

        <div className="grid gap-4">

          {filteredEmployees.map(emp => (

            <div
              key={emp.id}
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-5
              hover:shadow-2xl
              transition
              "
            >

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  <FaUserCircle
                    size={55}
                    className="text-blue-600"
                  />

                  <div>

                    <h2
                      className="
                      text-xl
                      font-bold
                      text-gray-800
                      "
                    >
                      {emp.name}
                    </h2>

                    <p className="text-gray-500">
                      {emp.email}
                    </p>

                    <p className="text-sm text-gray-600">
                      {emp.department}
                    </p>

                    <p className="text-sm text-gray-600">
                      {emp.designation}
                    </p>

                    <p className="font-semibold text-green-600">
                      ₹{emp.salary}
                    </p>

                  </div>

                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => {

                      setEditing(emp.id);

                      setForm({
                        employee_code:
                          emp.employee_code,
                        name:
                          emp.name,
                        email:
                          emp.email,
                        department:
                          emp.department,
                        designation:
                          emp.designation,
                        salary:
                          emp.salary
                      });

                    }}
                    className="
                    flex
                    items-center
                    gap-2
                    bg-blue-600
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    "
                  >
                    <FaEdit />
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteEmployee(emp.id)
                    }
                    className="
                    flex
                    items-center
                    gap-2
                    bg-red-600
                    text-white
                    px-4
                    py-2
                    rounded-xl
                    "
                  >
                    <FaTrash />
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {
        editing &&

        <div
          className="
          fixed
          inset-0
          bg-black/50
          flex
          items-center
          justify-center
          z-50
          "
        >

          <div
            className="
            bg-white
            p-8
            rounded-3xl
            w-[500px]
            shadow-2xl
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              mb-4
              "
            >
              Edit Employee
            </h2>

            <div className="grid gap-3">

              <input
                value={form.employee_code}
                onChange={(e)=>
                setForm({
                  ...form,
                  employee_code:
                  e.target.value
                })}
                placeholder="Employee Code"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.name}
                onChange={(e)=>
                setForm({
                  ...form,
                  name:e.target.value
                })}
                placeholder="Name"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.email}
                onChange={(e)=>
                setForm({
                  ...form,
                  email:e.target.value
                })}
                placeholder="Email"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.department}
                onChange={(e)=>
                setForm({
                  ...form,
                  department:e.target.value
                })}
                placeholder="Department"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.designation}
                onChange={(e)=>
                setForm({
                  ...form,
                  designation:e.target.value
                })}
                placeholder="Designation"
                className="border p-3 rounded-xl"
              />

              <input
                value={form.salary}
                onChange={(e)=>
                setForm({
                  ...form,
                  salary:e.target.value
                })}
                placeholder="Salary"
                className="border p-3 rounded-xl"
              />

              <button
                onClick={updateEmployee}
                className="
                bg-green-600
                text-white
                p-3
                rounded-xl
                "
              >
                Update Employee
              </button>

              <button
                onClick={() =>
                setEditing(null)}
                className="
                bg-gray-500
                text-white
                p-3
                rounded-xl
                "
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      }

    </div>

  );
}