import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", inputs);
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
      setErr(err.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>
        Login
        <form>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            placeholder="user name"
          />

          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="password"
          />

          <button onClick={handleSubmit}>Login</button>

          {err && <p>{err}</p>}

          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </h1>
    </div>
  );
};

export default Login;
