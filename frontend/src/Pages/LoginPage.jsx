import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      setMessage(response.data.message); // Show success message
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong"); // Show error message
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3600/auth/google"; // Backend OAuth route
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        {/* Other login form elements */}
        <button onClick={handleGoogleLogin}>Login with Google</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
