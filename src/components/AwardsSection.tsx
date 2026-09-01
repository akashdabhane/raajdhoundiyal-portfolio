"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./AwardsSection.module.css";

const awardsData = [
  {
    id: 1,
    src: "/Glaani-Pune-Film-Festival.png",
    alt: "Pune Short Film Festival 2015",
  },
  {
    id: 2,
    src: "/Glaani-Award.png",
    alt: "Glaani Official Selection 5th Pune Short Film Festival 2015",
  },
  {
    id: 3,
    src: "/Parwaaz-Ek-Udaan-Award.png",
    alt: "Parwaaz Ek Udaan Best Trailer #1 IFP 2014",
  },
];

export default function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevAward = () => {
    setCurrentIndex((prev) => (prev - 1 + awardsData.length) % awardsData.length);
  };

  const nextAward = () => {
    setCurrentIndex((prev) => (prev + 1) % awardsData.length);
  };

  return (
    <section id="awards" className={styles.awardsSection}>
      <div className={styles.backgroundImage}>
        <Image
          src="/award-background.jpg"
          alt="Award background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Winning Awards</h2>
          <p className={styles.quote}>
            &quot;SUCCESS ISN&apos;T A DESTINATION, IT&apos;S A PATH YOU WALK. DREAM BOLDLY,
            <br />
            PUT IN THE EFFORT, AND REACH FOR EXCELLENCE&quot;
          </p>
        </div>

        {/* Desktop Grid */}
        <div className={styles.awardsGrid}>
          {awardsData.map((award) => (
            <div key={award.id} className={styles.awardItem}>
              <Image
                src={award.src}
                alt={award.alt}
                width={300}
                height={200}
                className={styles.awardImage}
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className={styles.carousel}>
          <button className={styles.prev} onClick={prevAward} aria-label="Previous award">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <div className={styles.carouselImage}>
            <Image
              src={awardsData[currentIndex].src}
              alt={awardsData[currentIndex].alt}
              width={300}
              height={200}
              className={styles.awardImage}
            />
          </div>
          <button className={styles.next} onClick={nextAward} aria-label="Next award">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
