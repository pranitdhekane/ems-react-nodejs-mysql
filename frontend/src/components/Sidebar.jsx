import {
  FaUsers,
  FaChartBar,
  FaSignOutAlt,
  FaUserPlus
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div
      className="
      h-screen
      w-64
      bg-slate-900
      text-white
      flex
      flex-col
      p-6
      shadow-2xl
      "
    >

      <h1
        className="
        text-3xl
        font-bold
        mb-10
        "
      >
        🚀 EMS Pro
      </h1>

      <div
        className="
        space-y-4
        flex-1
        "
      >

        <Link
          to="/dashboard"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          bg-slate-800
          hover:bg-slate-700
          "
        >
          <FaChartBar />
          Dashboard
        </Link>

        <Link
          to="/employees"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          bg-slate-800
          hover:bg-slate-700
          "
        >
          <FaUsers />
          Employees
        </Link>

        <Link
          to="/add-employee"
          className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          bg-slate-800
          hover:bg-slate-700
          "
        >
          <FaUserPlus />
          Add Employee
        </Link>

      </div>

      <button
        onClick={() => {

          localStorage.clear();

          window.location = "/";
        }}
        className="
        flex
        items-center
        justify-center
        gap-2
        bg-red-600
        p-3
        rounded-xl
        hover:bg-red-700
        "
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>

  );
}