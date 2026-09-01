"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Projects.module.css";

const deliveredProjectsData = [
  { id: 1, title: "Project 1", image: "/delivered-2.jpg" },
  { id: 2, title: "Project 2", image: "/delivered-1.jpg" },
  { id: 3, title: "Project 5", image: "/delivered-5.jpg" },
  { id: 4, title: "Project 6", image: "/delivered-6.jpg" },
];

export default function DeliveredProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = deliveredProjectsData.length;

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
    <section id="gallery" className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Delivered Projects</h2>
          <p className={styles.subtitle}>LET&apos;S CRAFT SOMETHING EXTRAORDINARY</p>
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
                const project = deliveredProjectsData[dataIndex];
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
