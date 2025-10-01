import React, { useEffect, useRef } from "react";
import styles from "./SatyanarayanPooja.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";

gsap.registerPlugin(ScrollTrigger);

function SatyanarayanPooja() {
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
            src="https://static.toiimg.com/thumb/msid-91551097,imgsize-73708,width-400,resizemode-4/91551097.jpg"
            alt="Satyanarayan Pooja"
          />
          <div className={styles.heroText}>
            <h1>Satyanarayan Pooja</h1>
            <p>
              Perform Satyanarayan Pooja to invoke blessings for family welfare,
              prosperity, and fulfillment of wishes.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/contact" className="btn btn-warning">
            Book Satyanarayan Pooja 🌺
          </a>
        </div>

        {/* About Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>About Satyanarayan Pooja</h2>
          <p>
            Satyanarayan Pooja is a sacred ritual dedicated to Lord Vishnu. It is
            performed to thank the Lord for prosperity, good health, and overall
            well-being of the family. This pooja is especially performed on full
            moon days or special occasions.
          </p>
        </div>

        {/* Benefits Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Satyanarayan Pooja</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <h3>🕊️ Family Welfare</h3>
              <p>Ensures peace, harmony, and prosperity in the household.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>💰 Prosperity & Success</h3>
              <p>Brings financial stability and fulfills material wishes.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>🙏 Spiritual Growth</h3>
              <p>Strengthens devotion and spiritual awareness.</p>
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
            <li>Setting up the pooja altar with idol or picture of Lord Vishnu.</li>
            <li>Offering flowers, fruits, sweets, and holy water.</li>
            <li>Reciting the Satyanarayan Katha and mantras.</li>
            <li>Performing aarti and distributing prasad among devotees.</li>
            <li>Special prayers for prosperity, happiness, and family welfare.</li>
          </ul>
        </div>

        {/* Best Timings */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Best Timings</h2>
          <p>
            Full moon days, Poornima, or special auspicious occasions are ideal
            for Satyanarayan Pooja. Morning hours are preferred for maximum blessings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SatyanarayanPooja;
