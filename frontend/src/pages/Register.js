
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import styles from "./Register.module.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [expertise, setExpertise] = useState("");
  const [experience, setExperience] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        role,
        ...(role === "pundit" && { expertise, experience, phone })
      });
      alert("✅ Registration successful! Now login.");
      navigate("/login");
    } catch (err) {
      alert("❌ " + err.response?.data?.message || "Something went wrong");
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

            
            <select
              className={styles.input}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option className={styles.opt} value="user">User</option>
              <option className={styles.opt} value="pundit">Pundit</option>
            </select>

           
            {role === "pundit" && (
              <>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Expertise"
                  value={expertise}
                  onChange={(e) => setExpertise(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Experience (years)"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            )}

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
