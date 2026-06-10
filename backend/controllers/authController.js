const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login =
async(req,res)=>{

    const {email,password}
    = req.body;

    const [users]
    = await db.execute(
        "SELECT * FROM users WHERE email=?",
        [email]
    );

    if(users.length===0){

        return res.status(404)
        .json({
            message:"User not found"
        });
    }

    const user = users[0];

    const valid =
    await bcrypt.compare(
        password,
        user.password
    );

    if(!valid){

        return res.status(401)
        .json({
            message:"Wrong Password"
        });
    }

    const token =
    jwt.sign(
        {
            id:user.id,
            role:user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    );

    res.json({
        token,
        role:user.role
    });
};