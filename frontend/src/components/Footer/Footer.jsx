import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.par}>
          At DevOm, we cater to your spiritual and well-being needs by offering
          a range of carefully curated rituals and poojas. From invoking divine
          blessing.
        </p>
        <div className={styles.footerUp}>
          <div className={styles.blok}>
            <div className={styles.links}>
              <h1 className={styles.head}>Information</h1>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>
          <div className={styles.blok}>
            <div className={styles.links}>
              <h1 className={styles.head}>Information</h1>
              <a href="/about">About Us</a>
              <a href="/contact">Contact Us</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms & Conditions</a>
            </div>
          </div>
          <div className={styles.blok}>
            <div className={styles.links}>
              <h1 className={styles.head}>Helpful</h1>
              <a href="mailto:info@punditwebsite.com">conatctus@pundit.co.in</a>
            </div>
          </div>
          <div className={styles.blok}>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
        </div>
        <hr />
        <p>© {new Date().getFullYear()} Pundit Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
