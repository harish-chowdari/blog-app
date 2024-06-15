import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const res = await axios.post("/auth/register", inputs);
      console.log(res);
      navigate("/login")
    } 
    
    catch (err) {
      console.log(err);
      setErr(err.response.data)
    }
  };

  return (
    <div className="auth">
      <h1>
        Register
        <form>
          <input
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            placeholder="user name"
          />
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="email"
          />
          <input
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="password"
          />
          <button onClick={handleSubmit}>Register</button>
          {err &&  <p>{err}</p>}
          <span>
            Don't have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </h1>
    </div>
  );
};

export default Register;
