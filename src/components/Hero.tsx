"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import styles from "./HeroNav.module.css";

interface HeroSlide {
  id: number;
  bgImage: string;
  upperText: string;
  words: string[];
  subText?: string;
  ctaText: string;
  ctaLink: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    bgImage: "/homepage-1.jpg",
    upperText: "My Story",
    words: ["BEGINS", "HERE"],
    subText: "I CAN GIVE YOU EVERYTHING YOU NEED!",
    ctaText: "Hire Me Now",
    ctaLink: "/contact",
  },
  {
    id: 2,
    bgImage: "/homepage-2.jpg",
    upperText: "Your Vision, My Art",
    words: ["A", "NEW", "PATH", "EMERGES"],
    ctaText: "Hire Me Now",
    ctaLink: "/contact",
  },
  {
    id: 3,
    bgImage: "/homepage-3.jpg",
    upperText: "Your Story, My Magic",
    words: ["A", "NEW", "CHAPTER", "UNFOLDS"],
    ctaText: "Hire Me Now",
    ctaLink: "/contact",
  },
];

const AUTO_ADVANCE_INTERVAL = 6000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const restartAutoAdvance = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, AUTO_ADVANCE_INTERVAL);
  }, [nextSlide]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    restartAutoAdvance();
  };

  const handleNextClick = () => {
    nextSlide();
    restartAutoAdvance();
  };

  useEffect(() => {
    restartAutoAdvance();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [restartAutoAdvance]);

  return (
    <section id="hero" className={styles.heroCarousel}>
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        let letterDelayCount = 0.4;

        return (
          <div
            key={slide.id}
            className={`${styles.slide} ${isActive ? styles.active : ""}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${slide.bgImage})`,
            }}
          >
            <div className={styles.slideContent}>
              <div className={styles.textContent}>
                <div className={styles.upperText}>{slide.upperText}</div>
                <div className={`${styles.mainText} ${styles.wave}`}>
                  {slide.words.map((word, wIdx) => (
                    <span key={wIdx} style={{ display: "inline-block", marginRight: "0.3em" }}>
                      {word.split("").map((char, cIdx) => {
                        const delay = letterDelayCount;
                        letterDelayCount += 0.03;
                        return (
                          <span
                            key={cIdx}
                            style={{
                              animationDelay: `${delay}s`,
                              display: "inline-block",
                            }}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </span>
                  ))}
                </div>
                {slide.subText && <div className={styles.subText}>{slide.subText}</div>}
                <Link href={slide.ctaLink}>
                  <button className={styles.cta}>{slide.ctaText}</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      <button className={`${styles.navArrow} ${styles.prevArrow}`} onClick={prevSlide} aria-label="Previous slide">
        <span className={styles.icon}>
          <i className="fa fa-chevron-left"></i>
        </span>
      </button>
      <button className={`${styles.navArrow} ${styles.nextArrow}`} onClick={handleNextClick} aria-label="Next slide">
        <span className={styles.icon}>
          <i className="fa fa-chevron-right"></i>
        </span>
      </button>
    </section>
  );
}
