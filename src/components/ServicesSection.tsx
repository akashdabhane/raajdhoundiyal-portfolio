"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { servicesData } from "@/data/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Services</h2>
          <p className={styles.subtitle}>LET&apos;S MAKE GREAT THINGS TOGETHER</p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${
                animated ? styles.bounceIn : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.iconContainer}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={100}
                  height={100}
                  className={styles.serviceIcon}
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
