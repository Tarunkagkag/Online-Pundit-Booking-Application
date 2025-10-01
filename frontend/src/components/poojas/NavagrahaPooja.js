import React, { useEffect, useRef } from "react";
import styles from "./NavagrahaPooja.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";

gsap.registerPlugin(ScrollTrigger);

function NavagrahaPooja() {
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
            src="https://cdn.shopify.com/s/files/1/0901/3588/8184/files/Navagraha-1536x864_jpg.webp?v=1740132210"
            alt="Navagraha Pooja"
          />
          <div className={styles.heroText}>
            <h1>Navagraha Pooja</h1>
            <p>
              Balance the planetary influences in your life through Navagraha Pooja
              for health, prosperity, and peace.
            </p>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="/contact" className="btn btn-info">
            Book Navagraha Pooja 🌞
          </a>
        </div>

        {/* About Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>About Navagraha Pooja</h2>
          <p>
            Navagraha Pooja is a Vedic ritual performed to appease the nine planets
            (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, Ketu) in
            astrology. It helps remove obstacles, reduce doshas, and bring
            harmony and prosperity.
          </p>
        </div>

        {/* Benefits Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Navagraha Pooja</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <h3>🌞 Planetary Balance</h3>
              <p>Reduces malefic effects of planets and strengthens positive influence.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>💰 Prosperity</h3>
              <p>Improves financial stability, career growth, and success.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>🌿 Health & Peace</h3>
              <p>Enhances mental and physical well-being, bringing peace in life.</p>
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
            <li>Purification of pooja area and installation of Navagraha yantras.</li>
            <li>Offering flowers, fruits, and sacred items to the nine planets.</li>
            <li>Recitation of Navagraha mantras and Vedic hymns.</li>
            <li>Performing aarti and distributing prasad to devotees.</li>
            <li>Special prayers for longevity, success, and protection from doshas.</li>
          </ul>
        </div>

        {/* Best Timings */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>Best Timings</h2>
          <p>
            Tuesdays and Saturdays are considered auspicious for Navagraha Pooja.
            Early morning hours, especially during <b>Pradosh Kaal</b>, yield the
            best results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavagrahaPooja;
