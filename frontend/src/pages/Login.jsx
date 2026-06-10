import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Login Failed");
    }
  };

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      "
    >

      <motion.div

        initial={{
          opacity: 0,
          y: 50
        }}

        animate={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.6
        }}

        className="
        backdrop-blur-xl
        bg-white/10
        border
        border-white/20
        p-10
        rounded-3xl
        shadow-2xl
        w-[400px]
        "
      >

        <h1
          className="
          text-white
          text-3xl
          font-bold
          mb-6
          text-center
          "
        >
          Employee Portal
        </h1>

        <form
          onSubmit={login}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
            w-full
            p-3
            rounded-xl
            bg-white/10
            border
            border-white/20
            text-white
            outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
            w-full
            p-3
            rounded-xl
            bg-white/10
            border
            border-white/20
            text-white
            outline-none
            "
          />

          <button
            type="submit"
            className="
            w-full
            p-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            text-white
            font-semibold
            hover:scale-105
            transition
            "
          >
            Login
          </button>

        </form>

      </motion.div>

    </div>

  );
}