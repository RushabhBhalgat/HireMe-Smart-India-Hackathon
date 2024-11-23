import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default HomePage;
