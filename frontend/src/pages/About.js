import Navbar from "../components/Navbar";
import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";
import { gsap } from "gsap";


function About() {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(headingRef.current, { opacity: 0, y: -40, duration: 1 });
    gsap.from(paraRef.current, { opacity: 0, x: -100, duration: 1.2, delay: 0.4 });
    cardRefs.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <h1 ref={headingRef}>About Us</h1>
        <p ref={paraRef} className={styles.intro}>
          At <b>Pundit Services</b>, we bring spirituality closer to your home by
          offering traditional poojas and rituals with modern convenience. Our
          mission is to preserve <b>Vedic traditions</b> while making it easier for
          devotees to book and participate in sacred ceremonies.
        </p>

        <div className={styles.cards}>
          <div
            className={styles.card}
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <h3>✨ Authentic Priests</h3>
            <p>Experienced and certified pundits for every ritual.</p>
          </div>
          <div
            className={styles.card}
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <h3>📅 Easy Booking</h3>
            <p>Book any pooja online with just a few clicks.</p>
          </div>
          <div
            className={styles.card}
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <h3>🌸 Complete Rituals</h3>
            <p>All puja materials & mantras as per tradition.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

