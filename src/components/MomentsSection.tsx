"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./MomentsSection.module.css";

const momentsData = [
  { id: 1, type: "rectangle", src: "/workwith-1.jpg", alt: "Collaboration 1" },
  { id: 2, type: "rectangle", src: "/workwith-2.jpeg", alt: "Collaboration 2" },
  { id: 3, type: "square", src: "/workwith-3.jpeg", alt: "Collaboration 3" },
  { id: 4, type: "square", src: "/workwith-4.jpeg", alt: "Collaboration 4" },
  { id: 5, type: "square", src: "/workwith-5.jpg", alt: "Collaboration 5" },
  { id: 6, type: "square", src: "/workwith-6.jpg", alt: "Collaboration 6" },
];

export default function MomentsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Moments that shaped my journey</h2>
          <p className={styles.subtitle}>
            Bringing stories to life through partnerships with talented artists and visionaries
          </p>
        </div>

        <div className={styles.grid}>
          {momentsData.map((moment) => (
            <div
              key={moment.id}
              className={`${styles.gridItem} ${
                moment.type === "rectangle" ? styles.rectangle : styles.square
              }`}
              onClick={() => setSelectedImage(moment.src)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged moment"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
