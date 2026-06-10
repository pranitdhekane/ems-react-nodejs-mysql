import Sidebar from "../components/Sidebar";

export default function Dashboard() {

  return (

    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 rounded-3xl shadow-xl">
            <h3>Total Employees</h3>
            <h1 className="text-5xl font-bold mt-2">
              12
            </h1>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-400 text-white p-6 rounded-3xl shadow-xl">
            <h3>Departments</h3>
            <h1 className="text-5xl font-bold mt-2">
              4
            </h1>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-purple-400 text-white p-6 rounded-3xl shadow-xl">
            <h3>Admins</h3>
            <h1 className="text-5xl font-bold mt-2">
              1
            </h1>
          </div>

        </div>

      </div>

    </div>

  );
}