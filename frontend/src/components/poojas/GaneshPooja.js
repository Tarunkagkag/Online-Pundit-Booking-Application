import React, { useEffect, useRef } from "react";
import styles from "./GaneshPooja.module.css";
import { gsap } from "gsap";
import Navbar from "../Navbar";

function GaneshPooja() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);
  

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
    });

    

    // Sections animation
    sectionsRef.current.forEach((el, index) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.3 * index,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero} ref={heroRef}>
          <img
            src="https://images.news18.com/ibnlive/uploads/2025/08/image-2025-08-97a1b678f146274e432f9d798b39b7d4.jpg"
            alt="Ganesh Pooja"
          />
          <div className={styles.heroText}>
            <h1>Ganesh Pooja</h1>
            <p>
              Invoke the blessings of Lord Ganesha for prosperity and success
            </p>
          </div>
        </div>
        <div className={styles.cta} >
          <a href="/contact" className="btn btn-primary">
            Book a Pooja Now
          </a>
        </div>

        {/* About Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>About Ganesh Pooja</h2>
          <p>
            Ganesh Pooja is a sacred ritual dedicated to Lord Ganesha, the
            remover of obstacles and the god of new beginnings. This pooja is
            performed to seek divine guidance, prosperity, and smooth progress
            in life.
          </p>
        </div>

        {/* Benefits Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Ganesh Pooja</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <h3>Remove Obstacles</h3>
              <p>Enhances decision-making and clears obstacles.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Prosperity</h3>
              <p>Invites financial stability and career growth.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>Spiritual Growth</h3>
              <p>Deepens devotion and spiritual connection.</p>
            </div>
          </div>
        </div>

        {/* Rituals Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>Rituals & Procedure</h2>
          <ul>
            <li>Purification of the pooja area and invoking Lord Ganesha.</li>
            <li>Offering flowers, fruits, sweets, and traditional items.</li>
            <li>Recitation of Ganesh mantras and chanting Vedic hymns.</li>
            <li>Performing aarti to honor Lord Ganesha.</li>
            <li>
              Concluding with distribution of prasad among family members.
            </li>
          </ul>
        </div>


        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Best Timings</h2>
          <p>
            Auspicious on Tuesdays and during Ganesh Chaturthi. Early morning
            hours are ideal for maximum spiritual benefit.
          </p>
        </div>

        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>Best Timings</h2>
          <p>
            Auspicious on Tuesdays and during Ganesh Chaturthi. Early morning
            hours are ideal for maximum spiritual benefit.
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default GaneshPooja;
