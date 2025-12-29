import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import styles from "./terms.module.css";
import { gsap } from "gsap";

function Terms() {
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
      <div className={styles.termsContainer}>
        <h1 ref={headingRef}>Terms & Conditions</h1>

        <div className={styles.content}>
          <section ref={(el) => (sectionRefs.current[0] = el)}>
            <h2>1. Introduction</h2>
            <p>
              Welcome to <b>Pundit Booking Services</b>. By using our website
              and booking platform, you agree to comply with and be bound by the
              following Terms and Conditions. Please read them carefully before
              using our services.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[1] = el)}>
            <h2>2. Service Overview</h2>
            <p>
              Pundit Booking Services provides an online platform to book
              certified and experienced pundits for various poojas and rituals.
              The service includes connecting users with pundits and
              facilitating the scheduling of ceremonies as per the provided
              details.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[2] = el)}>
            <h2>3. User Responsibilities</h2>
            <p>
              Users must provide accurate details during booking, including
              contact information, date, and location. Any false or incomplete
              information may result in cancellation without refund.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[3] = el)}>
            <h2>4. Booking & Payments</h2>
            <p>
              All bookings are subject to confirmation. Payments, once made, are
              non-refundable except in cases of service cancellation from our
              end. Prices may vary based on the type of pooja or location.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[4] = el)}>
            <h2>5. Cancellations</h2>
            <p>
              You may cancel your booking up to 48 hours before the scheduled
              ceremony. For cancellations after this period, no refund will be
              issued. However, rescheduling is possible based on pundit
              availability.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[5] = el)}>
            <h2>6. Limitation of Liability</h2>
            <p>
              Pundit Booking Services is not responsible for any direct,
              indirect, or incidental damages arising from your use of our
              platform or services. We only facilitate the connection between
              users and registered pundits.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[6] = el)}>
            <h2>7. Changes to Terms</h2>
            <p>
              We may update or modify these Terms and Conditions at any time
              without prior notice. The latest version will always be available
              on our website.
            </p>
          </section>

          <section ref={(el) => (sectionRefs.current[7] = el)}>
            <h2>8. Contact Us</h2>
            <p>
              For any queries or disputes regarding these terms, please contact
              us at: <b>support@punditservices.com</b>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Terms;
