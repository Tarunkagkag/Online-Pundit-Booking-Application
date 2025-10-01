import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Stairs.module.css";

const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;
  const stairParentRef = useRef(null);
  const pageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.set(stairParentRef.current, { display: "block" });
    gsap.set(`.${styles.stair}`, { height: "100%", y: "0%" });

    tl.from(`.${styles.stair}`, {
      height: 0,
      stagger: { amount: -0.2 },
    });
    tl.to(`.${styles.stair}`, {
      y: "100%",
      stagger: { amount: -0.25 },
    });
    tl.set(stairParentRef.current, { display: "none" });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });
  }, [currentPath]);

  return (
    <div>
      <div ref={stairParentRef} className={styles.stairOverlay}>
        <div className={styles.stairContainer}>
          <div className={`${styles.stair} ${styles.black}`}></div>
          <div className={`${styles.stair} ${styles.black}`}></div>
          <div className={`${styles.stair} ${styles.black}`}></div>
          <div className={`${styles.stair} ${styles.black}`}></div>
          <div className={`${styles.stair} ${styles.black}`}></div>
        </div>
      </div>
      <div ref={pageRef} className={styles.pageContent}>
        {children}
      </div>
    </div>
  );
};
export default Stairs;
