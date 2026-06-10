import {useEffect,useState}
from "react";

import api from "../services/api";

export default function EmployeeTable(){

 const [employees,setEmployees]
 = useState([]);

 useEffect(()=>{

  loadEmployees();

 },[]);

 const loadEmployees =
 async()=>{

  const res =
  await api.get("/employees");

  setEmployees(res.data);
 };

 return(

 <div
 className="
 bg-white/10
 backdrop-blur-xl
 rounded-3xl
 p-6
 text-white
 "
 >

 <table
  className="w-full"
 >

 <thead>

 <tr>

 <th>Name</th>
 <th>Email</th>
 <th>Department</th>
 <th>Salary</th>

 </tr>

 </thead>

 <tbody>

 {employees.map(emp=>(

 <tr key={emp.id}>

 <td>{emp.name}</td>
 <td>{emp.email}</td>
 <td>{emp.department}</td>
 <td>{emp.salary}</td>

 </tr>

 ))}

 </tbody>

 </table>

 </div>

 );
}