import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import styles from "./Navbar.module.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.timer}>
        <div className={styles.logo}></div>
        <div className={styles.time}>{time.toLocaleTimeString()}</div>
      </div>
      <ul>
        {user ? (
          <>
            <div className={styles.rightContainer}>
              <li>
                <Link className={styles.navLink} to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="/About">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="/Contact">
                  Contact Us
                </Link>
              </li>
              

              <li>
                <button className={styles.btn} onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </div>
          </>
        ) : (
          <>
            <div className={styles.rightContainer}>
              <li>
                <Link className={styles.navLink} to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className={styles.navLink} to="/register">
                  Register
                </Link>
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
