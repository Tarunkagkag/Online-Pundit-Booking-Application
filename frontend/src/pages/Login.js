import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../context/AuthContext";
import styles from "./Login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });

      login(res.data.user, res.data.token); // 

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert("❌ " + (err.response?.data?.message || "Login failed"));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 >Login</h2>
        <input type="email" value={email} placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} className={styles.input} />
        {/* <input type="password" value={password} placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} className={styles.input} /> */}
          <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Password"
            minLength={8}
            maxLength={16}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <span
            className={styles.eyeIcon}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
        <p className={styles.linkText}>
  <Link to="/forgot-password">Forgot Password?</Link>
</p>

        <button onClick={handleLogin} className={styles.button}>Login</button>
        <p className={styles.registerLink}>
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

