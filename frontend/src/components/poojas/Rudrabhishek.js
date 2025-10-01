import React, { useEffect, useRef } from "react";
import styles from "./RudrabhishekPooja.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";

gsap.registerPlugin(ScrollTrigger);

function RudrabhishekPooja() {
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
        y: 60,
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
            src="https://d18guwlcxyb2ak.cloudfront.net/wp-content/uploads/2024/11/25155902/IMG-20241119-WA0007.jpg"
            alt="Rudrabhishek Pooja"
          />
          <div className={styles.heroText}>
            <h1>Rudrabhishek Pooja</h1>
            <p>
              Perform Rudrabhishek to seek blessings from Lord Shiva for peace,
              health, and spiritual growth.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/contact" className="btn btn-dark">
            Book Rudrabhishek Pooja 🕉️
          </a>
        </div>

        {/* About Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>About Rudrabhishek Pooja</h2>
          <p>
            Rudrabhishek Pooja is a sacred ritual dedicated to Lord Shiva, where
            the Shiva Linga is bathed with water, milk, honey, and other offerings
            while chanting the Rudram Mantras. This pooja helps in removing negative
            energies, brings peace, and fulfills desires.
          </p>
        </div>

        {/* Benefits Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Rudrabhishek Pooja</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <h3>🕊️ Peace & Positivity</h3>
              <p>Removes negative energies and brings harmony to life.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>💪 Health & Strength</h3>
              <p>Promotes physical and mental well-being.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>🙏 Spiritual Growth</h3>
              <p>Enhances devotion and strengthens spiritual connection.</p>
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
            <li>Purification of pooja space and Shiva Linga.</li>
            <li>Abhishek with water, milk, honey, ghee, and sacred items.</li>
            <li>Chanting of Rudram and Shiva mantras.</li>
            <li>Offering flowers and performing aarti.</li>
            <li>Distribution of prasad to family and devotees.</li>
          </ul>
        </div>

        {/* Best Timings */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Best Timings</h2>
          <p>
            Mondays and during <b>Shravan month</b> are considered highly auspicious
            for Rudrabhishek Pooja. Early morning or evening is ideal for maximum
            spiritual benefit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RudrabhishekPooja;
