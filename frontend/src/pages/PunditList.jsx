import React from "react";

import { Link, useNavigate } from "react-router-dom";
import PUNDITS from "./data/pundits";
import styles from "./PunditList.module.css";

function PunditList() {
  return (
    <div className={styles.container}>
      <h1>Available Pundits</h1>
      <div className={styles.grid}>
        {PUNDITS.map((p) => (
          <div className={styles.card} key={p.id}>
            <img src={p.imageUrl} alt={p.name} className={styles.image} />
            <h2>{p.name}</h2>
            <p>
              <strong>Specialization:</strong> {p.specialization}
            </p>
            <p>
              <strong>Experience:</strong> {p.experience} years
            </p>
            <p>
              <strong>Location:</strong> {p.location}
            </p>
            <Link to={`/pundit/${p.id}`} className={styles.btn}>
              View Details
            </Link>
            <Link to="./Contact" className={styles.btn}>
              Book Pooja
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PunditList;
