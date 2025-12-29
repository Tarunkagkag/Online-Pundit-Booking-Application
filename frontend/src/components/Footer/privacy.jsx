import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import styles from "./privacy.module.css";
import { gsap } from "gsap";

function PrivacyPolicy() {
  const headingRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.from(headingRef.current, { opacity: 0, y: -40, duration: 1 });
    sectionRefs.current.forEach((section, i) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: "power3.out",
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.privacyContainer}>
        <h1 ref={headingRef}>Privacy Policy</h1>

        <div className={styles.content}>
          <section ref={(el) => (sectionRefs.current[0] = el)}>
            <h2>1. Introduction</h2>
            <p>
              Welcome to <b>Pundit Booking Services</b>. Your privacy is
              important to us. This Privacy Policy explains how we collect, use,
              and protect your personal information when you use our services.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[1] = el)}>
            <h2>2. Information We Collect</h2>
            <p>
              We collect personal details such as your name, contact number,
              email address, and location when you book a service. We may also
              collect browser and device information to improve user experience.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[2] = el)}>
            <h2>3. How We Use Your Information</h2>
            <p>
              We use your data to confirm bookings, communicate service details,
              and improve our offerings. We never sell or share your personal
              data with third parties without your consent.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[3] = el)}>
            <h2>4. Data Security</h2>
            <p>
              We use secure servers and encryption to protect your personal
              information. However, no online system is completely secure, so we
              encourage you to take care when sharing personal details online.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[4] = el)}>
            <h2>5. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience and monitor
              site performance. You can disable cookies through your browser
              settings at any time.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[5] = el)}>
            <h2>6. Updates to This Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Please review
              this page periodically to stay informed about any changes.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[6] = el)}>
            <h2>7. Contact Us</h2>
            <p>
              For questions or concerns regarding our Privacy Policy, please
              contact us at: <b>support@punditservices.com</b>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
