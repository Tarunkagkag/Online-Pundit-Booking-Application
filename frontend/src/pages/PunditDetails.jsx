import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PUNDITS from "./data/pundits";
import styles from "./PunditDetails.module.css";

function PunditDetails() {
  const { id } = useParams();
  const pundit = PUNDITS.find((p) => p.id === id);

  const [form, setForm] = useState({
    name: "",
    date: "",
    poojaType: "",
    message: "",
  });

  if (!pundit) return <h2>Pundit not found</h2>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\n\nPundit: ${pundit.name}\nName: ${form.name}\nDate: ${form.date}\nPooja: ${form.poojaType}\nMessage: ${form.message}`
    );
  };

  return (
    <div className={styles.container}>
      <h1>{pundit.name}</h1>
      <img src={pundit.imageUrl} alt={pundit.name} className={styles.image} />
      <p>
        <strong>Specialization:</strong> {pundit.specialization}
      </p>
      <p>
        <strong>Experience:</strong> {pundit.experience} years
      </p>
      <p>
        <strong>Location:</strong> {pundit.location}
      </p>
      <p>{pundit.description}</p>

      <h2>Book This Pundit</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="poojaType"
          placeholder="Type of Pooja"
          value={form.poojaType}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Additional Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default PunditDetails;
