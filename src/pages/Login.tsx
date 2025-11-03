import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) navigate("/dashboard");
    else alert("Invalid credentials");
  };

  return (
      <div className="max-w-md w-full bg-(--bg-color) shadow-md rounded-xl p-8 mx-auto my-14">
        <h2 className="text-2xl font-semibold mb-6 text-(--text-color) text-center">
          Login To Continue
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-primary)"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          />
          <button type="submit" className="btn-primary mt-4">
            Login
          </button>
        </form>

        <p className="text-center text-neutral-500 mt-4 text-sm">
          Don't have an account?{" "}
          <span className="text-(--color-primary) font-medium cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
  );
};

export default Login;
