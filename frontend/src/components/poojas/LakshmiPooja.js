import React, { useEffect, useRef } from "react";
import styles from "./LakshmiPooja.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar";

gsap.registerPlugin(ScrollTrigger);

function LakshmiPooja() {
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

    // Section animations
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
            src="https://cdn.pixabay.com/video/2023/11/11/188672-883619720_tiny.jpg"
            alt="Lakshmi Pooja"
          />
          <div className={styles.heroText}>
            <h1>Lakshmi Pooja</h1>
            <p>
              Invoke the divine blessings of Goddess Lakshmi for wealth,
              prosperity, and harmony in life.
            </p>
          </div>
        </div>
        <div className={styles.cta}>
          <a href="/contact" className="btn btn-warning">
            Book a Lakshmi Pooja ✨
          </a>
        </div>

        {/* About Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>About Lakshmi Pooja</h2>
          <p>
            Lakshmi Pooja is performed to honor Goddess Lakshmi, the goddess of
            wealth, fortune, and prosperity. This ritual is widely observed
            during <b>Diwali</b>, bringing peace and abundance into homes and
            businesses.
          </p>
        </div>

        {/* Benefits Section */}
        <div
          className={styles.section}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>Benefits of Lakshmi Pooja</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <h3>💰 Prosperity</h3>
              <p>Attracts financial growth and stability in business & career.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>🏡 Harmony</h3>
              <p>Brings peace, happiness, and balance to family life.</p>
            </div>
            <div className={styles.benefitCard}>
              <h3>🙏 Divine Grace</h3>
              <p>Removes negativity and invites blessings of Goddess Lakshmi.</p>
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
            <li>Purification of space and invocation of Goddess Lakshmi.</li>
            <li>
              Placing of Kalash and offering flowers, fruits, rice, and sweets.
            </li>
            <li>Chanting of Lakshmi mantras and Vedic hymns.</li>
            <li>Performing aarti and lighting of diyas.</li>
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
            The most auspicious time for Lakshmi Pooja is during{" "}
            <b>Diwali Amavasya</b> (new moon night), especially during{" "}
            <b>Pradosh Kaal (sunset to night)</b>. Fridays are also considered
            highly favorable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LakshmiPooja;
