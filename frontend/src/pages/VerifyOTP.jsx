import React, { useState, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import API from "../api";
import styles from "./VerifyOTP.module.css";

function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useContext(AuthContext);

  const email = location.state?.email;

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (!isNaN(element.value)) {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      if (index < 5 && element.value !== "") {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData("Text").trim();
    if (pasteData.length === 6 && !isNaN(pasteData)) {
      const newOtp = pasteData.split("");
      setOtp(newOtp);
      inputRefs.current[5].focus();
    }
    e.preventDefault();
  };

  const submitOTP = async () => {
    const otpCode = otp.join("");
    if (otpCode.length < 6) {
      alert("Please enter all 6 digits");
      return;
    }

    try {
      const res = await API.post("/auth/verify-otp", { email, otp: otpCode });
      localStorage.setItem("token", res.data.token);
      login(res.data.user, res.data.token);
      alert("OTP Verified Successfully!");

      // if (res.data.user.role === "admin") {
      //   navigate("/admin");
      //   route;
      // } else {
      //   navigate("/home");
      // }
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else if (res.data.user.role === "pundit") {
        navigate("/pundit-dashboard"); // new pundit dashboard route
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Enter OTP</h2>
        <div className={styles.otpContainer} onPaste={handlePaste}>
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className={styles.otpInput}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>
        <button onClick={submitOTP} className={styles.button}>
          Verify OTP
        </button>
      </div>
    </div>
  );
}

export default VerifyOTP;
