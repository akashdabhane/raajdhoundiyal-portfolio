"use client";

import { useState } from "react";
import Link from "next/link";
import { worksData, WorkCategory, CATEGORY_SLUG_MAP } from "@/data/works";
import styles from "./WorksSection.module.css";

const categoriesList: WorkCategory[] = [
  "ALL",
  "CAMERA",
  "COLOR GRADING",
  "DIRECTION",
  "EDITING",
  "PRODUCTION DESIGN",
  "WRITING",
];

export default function WorksSection() {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredWorks = worksData.filter((work) => {
    if (activeCategory === "ALL") return true;
    return work.categories.includes(activeCategory);
  });

  const visibleWorks = showAll ? filteredWorks : filteredWorks.slice(0, 12);

  return (
    <section id="work" className={styles.workSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Works</h2>
          <p className={styles.subtitle}>WE WILL TO DEVELOP YOUR FILM, YOUR TALENT</p>
        </div>

        <div className={styles.filterContainer}>
          {categoriesList.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterButton} ${
                activeCategory === cat ? styles.active : ""
              }`}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.videoGrid}>
          {visibleWorks.map((work, idx) => (
            <div
              key={work.id}
              className={styles.videoCard}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <div className={styles.thumbnailContainer}>
                <div
                  className={styles.thumbnail}
                  style={{ backgroundImage: `url(${work.thumbnail})` }}
                >
                  <div className={styles.overlay}>
                    <Link
                      href={`/video/${work.slug}`}
                      className={styles.playButton}
                      aria-label={`Play ${work.title}`}
                    >
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="30"
                          cy="30"
                          r="30"
                          fill="rgba(255, 255, 255, 0.9)"
                        />
                        <path d="M25 20L40 30L25 40V20Z" fill="#FF6B35" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.cardContent}>
                <Link href={`/video/${work.slug}`} className={styles.titleLink}>
                  <h3 className={styles.videoTitle}>{work.title}</h3>
                </Link>
                <div className={styles.tags}>
                  {work.categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/video-category/${CATEGORY_SLUG_MAP[cat]}`}
                      className={styles.tag}
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorks.length > 12 && (
          <div className={styles.viewMoreContainer}>
            <button
              className={styles.filterButton}
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
