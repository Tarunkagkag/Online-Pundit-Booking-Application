
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import styles from "./Contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contacts: "",
    date: "",
    poojaType: "",
    message: "",
  });

  const navigate = useNavigate();

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to book pooja.");
      navigate("/login");
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/contacts", form);
      alert("✅ Pooja Booked Successfully!");
      setForm({
        name: "",
        email: "",
        contacts: "",
        date: "",
        poojaType: "",
        message: "",
      });
    } catch (err) {
      alert("❌ Failed to send message");
    }
  };

  return (
    <div>
      <Navbar />

      <div className={styles.container}>
        <h2>Book Pooja</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          
          <input type="text" name="name" placeholder="Your Name"
            value={form.name} onChange={handleChange} required />

          <input type="email" name="email" placeholder="Your Email"
            value={form.email} onChange={handleChange} required />

          <input type="tel" name="contacts" placeholder="Contact Number"
            value={form.contacts} onChange={handleChange} required />

          <input type="date" name="date" value={form.date}
            onChange={handleChange} required />

          <select name="poojaType" value={form.poojaType}
            onChange={handleChange} required>
            <option value="">-- Select Pooja Type --</option>
            <option value="Griha Pravesh">Griha Pravesh</option>
            <option value="Satyanarayan Katha">Satyanarayan Katha</option>
            <option value="Marriage Pooja">Marriage Pooja</option>
            <option value="Mundan Ceremony">Mundan Ceremony</option>
            <option value="Navgrah Shanti">Navgrah Shanti</option>
            <option value="Other">Other</option>
          </select>

          <textarea name="message" placeholder="Your Message"
            value={form.message} onChange={handleChange} required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
