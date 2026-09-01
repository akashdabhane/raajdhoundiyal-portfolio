"use client";

import { useEffect, useState, useCallback } from "react";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHero = useCallback(() => {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToHero}
      aria-label="Scroll to top"
      className={`${styles.scrollTop} ${visible ? styles.visible : ""}`}
    >
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 15l7-7 7 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
