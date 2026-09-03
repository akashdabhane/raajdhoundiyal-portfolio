"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./UpcomingProjects.module.css";

const upcomingProjectsData = [
  { id: 1, title: "Upcoming 1", image: "/upcoming-9.jpg" },
  { id: 2, title: "Upcoming 2", image: "/upcoming-10.jpg" },
  { id: 3, title: "Upcoming 3", image: "/upcoming-11.jpg" },
  { id: 4, title: "Upcoming 4", image: "/upcoming-12.jpg" },
  { id: 5, title: "Upcoming 5", image: "/upcoming-13.jpg" },
];

export default function UpcomingProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = upcomingProjectsData.length;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Compute 5 visible slots around activeIndex
  const visibleIndices = [
    (activeIndex - 2 + total) % total,
    (activeIndex - 1 + total) % total,
    activeIndex,
    (activeIndex + 1) % total,
    (activeIndex + 2) % total,
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Upcoming Projects</h2>
          <p className={styles.subtitle}>LET&apos;S TURN DREAMS INTO REALITY</p>
        </div>

        <div className={styles.carouselContainer}>
          <button
            className={styles.navButton}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className={styles.carousel}>
            <div className={styles.slideContainer}>
              {visibleIndices.map((dataIndex, slotIndex) => {
                const project = upcomingProjectsData[dataIndex];
                const isActive = slotIndex === 2;

                return (
                  <div
                    key={`${slotIndex}-${project.id}`}
                    className={`${styles.slide} ${
                      isActive ? styles.activeSlide : styles.inactiveSlide
                    }`}
                  >
                    <div className={styles.projectCard}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={styles.projectImage}
                      />
                      {!isActive && <div className={styles.overlay}></div>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            className={styles.navButton}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <div className={styles.carouselWhiteBg}></div>
    </section>
  );
}
