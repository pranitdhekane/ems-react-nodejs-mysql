require("dotenv")
.config();

const express =
require("express");

const cors =
require("cors");

const app =
express();

app.use(cors());

app.use(express.json());

app.use(
 "/api/auth",
 require("./routes/authRoutes")
);

app.use(
 "/api/employees",
 require("./routes/employeeRoutes")
);

app.get(
 "/",
 (req,res)=>{
   res.send(
    "Employee API Running"
   );
 }
);

app.listen(
 process.env.PORT,
 ()=>{
   console.log(
   `Server running on port ${process.env.PORT}`
   );
 }
);