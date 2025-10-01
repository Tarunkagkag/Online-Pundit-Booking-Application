import React, { useEffect, useRef } from "react";
import styles from "./MahaMrityunjayaPooja.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";

gsap.registerPlugin(ScrollTrigger);

function MahaMrityunjayaPooja() {
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
            src="https://cdn.99pandit.com/images/blogsimg/Maha-Mrityunjaya-Homam-1.webp"
            alt="Maha Mrityunjaya Pooja"
          />
          <div className={styles.heroText}>
            <h1>Maha Mrityunjaya Pooja</h1>
            <p>
              Perform the powerful Maha Mrityunjaya Pooja for health, longevity, and
              protection from negative energies.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/contact" className="btn btn-success">
            Book Maha Mrityunjaya Pooja 🙏
          </a>
        </div>

        {/* About Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>About Maha Mrityunjaya Pooja</h2>
          <p>
            Maha Mrityunjaya Pooja is a sacred ritual dedicated to Lord Shiva, 
            invoking the power of the <b>Maha Mrityunjaya Mantra</b>. It is performed 
            for protection against accidents, severe illnesses, negative influences, 
            and to enhance physical and mental strength.
          </p>
        </div>

        {/* Benefits Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Maha Mrityunjaya Pooja</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <h3>🛡️ Protection</h3>
              <p>Protects from accidents, negative energies, and health issues.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>💪 Strength</h3>
              <p>Enhances physical, mental, and spiritual strength.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>🌿 Healing</h3>
              <p>Supports recovery from illness and promotes longevity.</p>
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
            <li>Purification of pooja area and sacred setup.</li>
            <li>Invocation of Lord Shiva and chanting the Maha Mrityunjaya Mantra.</li>
            <li>Offering flowers, fruits, and bilva leaves.</li>
            <li>Lighting of lamps and performing aarti to conclude the pooja.</li>
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
            The pooja is highly auspicious on <b>Somvar (Mondays)</b>, 
            during <b>Shivratri</b>, and in the early morning or Pradosh Kaal. 
            Performing it regularly brings continuous protection and blessings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MahaMrityunjayaPooja;
