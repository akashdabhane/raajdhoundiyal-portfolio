import Image from "next/image";
import { servicesData } from "@/data/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>My Services</h2>
          <p className={styles.subtitle}>LET&apos;S MAKE GREAT THINGS TOGETHER</p>
        </div>

        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
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
