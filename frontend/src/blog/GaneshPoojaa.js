// import React, { useEffect, useRef } from "react";
// import Navbar from "../components/Navbar";
// import styles from "./GaneshPoojaa.module.css";
// import { gsap } from "gsap";

// function BlogGaneshPooja() {
//   const headingRef = useRef(null);
//   const sectionRefs = useRef([]);

//   useEffect(() => {
//     gsap.from(headingRef.current, { opacity: 0, y: -40, duration: 1 });
//     sectionRefs.current.forEach((section, i) => {
//       gsap.from(section, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         delay: 0.3 + i * 0.2,
//         ease: "power3.out",
//       });
//     });
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className={styles.blogContainer}>
//         <h1 ref={headingRef}>Significance of Ganesh Pooja in Hindu Tradition</h1>

//         <div className={styles.content}>
//           <section ref={(el) => (sectionRefs.current[0] = el)}>
//             <img
//               src="https://images.news18.com/ibnlive/uploads/2025/08/image-2025-08-97a1b678f146274e432f9d798b39b7d4.jpg"
//               alt="Ganesh Pooja"
//               className={styles.blogImage}
//             />
//             <p>
//               <b>Lord Ganesha</b>, the remover of obstacles and the god of new
//               beginnings, is worshipped before every auspicious event in Hindu
//               culture. <b>Ganesh Pooja</b> marks the invocation of divine blessings,
//               wisdom, and prosperity.
//             </p>
//           </section>

//           <section ref={(el) => (sectionRefs.current[1] = el)}>
//             <h2>1. The Essence of Ganesh Pooja</h2>
//             <p>
//               The ritual begins with invoking Lord Ganesha through mantras and
//               offerings of <b>modaks, durva grass, flowers, and sandalwood</b>.
//               Devotees believe that performing Ganesh Pooja before starting any
//               task ensures success and removes negative energies.
//             </p>
//           </section>

//           <section ref={(el) => (sectionRefs.current[2] = el)}>
//             <h2>2. Symbolism of Lord Ganesha</h2>
//             <p>
//               Lord Ganesha’s large head represents wisdom, small eyes signify
//               concentration, and his trunk denotes adaptability. His vehicle, the
//               mouse, symbolizes humility and control over desires.
//             </p>
//           </section>

//           <section ref={(el) => (sectionRefs.current[3] = el)}>
//             <h2>3. Ganesh Chaturthi Celebration</h2>
//             <p>
//               <b>Ganesh Chaturthi</b> is one of the most celebrated festivals in
//               India, lasting for 10 days. Devotees install clay idols of Ganesha,
//               perform aarti, and chant hymns like <b>“Ganapati Bappa Morya”</b> with
//               devotion and joy.
//             </p>
//           </section>

//           <section ref={(el) => (sectionRefs.current[4] = el)}>
//             <h2>4. Environmental Awareness</h2>
//             <p>
//               Recently, there has been a growing movement toward using
//               <b>eco-friendly idols</b> made from clay, natural colors, and organic
//               materials to preserve the environment and reduce pollution after the
//               visarjan (immersion) ceremony.
//             </p>
//           </section>

//           <section ref={(el) => (sectionRefs.current[5] = el)}>
//             <h2>5. Book a Ganesh Pooja with Us</h2>
//             <p>
//               At <b>Pundit Booking Services</b>, we provide certified priests for
//               performing <b>Ganesh Pooja</b> at your home or office, following Vedic
//               rituals and traditions. You can easily book a pooja date online and
//               receive complete assistance with samagri (ritual items).
//             </p>
//           </section>

//           <p className={styles.conclusion}>
//             🙏 May Lord Ganesha bless you with wisdom, peace, and prosperity.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BlogGaneshPooja;
import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import styles from "./GaneshPoojaa.module.css";
import { gsap } from "gsap";

function BlogGaneshPooja() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.blogContainer} ref={containerRef}>
        <div className={styles.heroSection}>
          <img
            src="https://images.news18.com/ibnlive/uploads/2025/08/image-2025-08-97a1b678f146274e432f9d798b39b7d4.jpg"
            alt="Ganesh Pooja Celebration"
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <h1>Ganesh Pooja – The Divine Beginning of All Endeavors</h1>
            <p className={styles.meta}>
              🕉️ Posted on <b>October 30, 2025</b> | By <b>Pundit Booking Team</b>
            </p>
          </div>
        </div>

        <div className={styles.content}>
          <p>
            <b>Lord Ganesha</b>, also known as <b>Vighnaharta</b> (remover of
            obstacles), is one of the most revered deities in Hindu tradition.
            Every auspicious occasion begins with Ganesh Pooja, symbolizing wisdom,
            success, and the removal of hurdles from life’s journey.
          </p>

          <h2>1. Why is Ganesh Pooja Important?</h2>
          <p>
            Ganesh Pooja is performed before any major event — be it a wedding,
            business inauguration, or new home ceremony — to invoke blessings of
            clarity, wisdom, and prosperity. It is believed that Lord Ganesha clears
            the path to success for those who worship Him with pure devotion.
          </p>

          <h2>2. Rituals Performed During the Pooja</h2>
          <ul>
            <li>🪔 Invocation (Avahana) with mantras.</li>
            <li>🌸 Offering flowers, durva grass, and modaks (Ganesha’s favorite sweet).</li>
            <li>📿 Chanting of “Om Gan Ganapataye Namah”.</li>
            <li>🔥 Performing aarti and seeking blessings for wisdom and strength.</li>
          </ul>

          <h2>3. Symbolism of Lord Ganesha</h2>
          <p>
            Every part of Ganesha’s image has deep spiritual meaning — His large head
            represents wisdom, His big ears symbolize attentiveness, and His broken
            tusk reminds us of sacrifice for knowledge and righteousness.
          </p>

          <h2>4. Ganesh Chaturthi Festival</h2>
          <p>
            The grand festival of <b>Ganesh Chaturthi</b> celebrates His birth and
            devotion. For ten days, homes and temples are filled with music, prayers,
            and joy before the final <b>Visarjan</b> — immersion of the idol,
            symbolizing detachment and renewal.
          </p>

          <h2>5. Eco-Friendly Celebrations</h2>
          <p>
            Many devotees now adopt <b>eco-friendly clay idols</b> and natural colors
            to preserve the environment. This small change makes the devotion both
            pure and sustainable.
          </p>

          <h2>6. Book a Ganesh Pooja with Us</h2>
          <p>
            At <b>Pundit Booking Services</b>, we make it easy to book a certified
            pundit for your Ganesh Pooja. Our experienced priests follow authentic
            Vedic rituals and provide complete samagri for the ceremony. Book today
            and start your new beginnings with divine blessings.
          </p>

          <div className={styles.quoteBox}>
            <p>“May Lord Ganesha bless your home with peace, prosperity, and happiness.”</p>
          </div>

          <p className={styles.footerNote}>
            📧 For bookings or more information, contact us at{" "}
            <b>support@punditservices.com</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogGaneshPooja;
