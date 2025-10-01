import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import styles from "./Register.module.css";
import { Link} from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      alert("✅ Registration successful! Now login.");
      navigate("/login");
    } catch (err) {
      alert("❌ " + err.response.data.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <div className={styles.container}>
          <div className={styles.card}>
            <h2 className={styles.register}>Register</h2>
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.button} type="submit">
              Register
            </button>
            <p className={styles.loginLink}>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
