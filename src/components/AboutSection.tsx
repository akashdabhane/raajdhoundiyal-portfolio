import Link from "next/link";
import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          <div className={styles.contentSection}>
            <h2 className={styles.title}>
              A Journey From A Blank Slate To My Extraordinary Story!
            </h2>
            <div className={styles.textContent}>
              <p>
                I&apos;m Raaj Dhoundiyal, a filmmaker from (Pauri, Uttarakhand) with a
                strong background in cinematography, editing, writing, and color
                grading. After completing my studies, I further honed my skills
                through specialized training in VFX Pro, Cinematography, Editing and
                Color Grading at top institutions including MAAC (Maya Academy of
                Advanced Cinematics) in Delhi, Maharaja Agrasen College in Delhi,
                Shemaroo Institute of Film &amp; Technology (SIFT) in Mumbai, and Zee
                Institute of Media Arts (ZIMA) in Mumbai.
              </p>
              <p>
                I&apos;ve directed two short films: Parwaaz Ek Udaan (Best Trailer #1
                at IFP 50-Hour Filmmaking Challenge, 2014) and Glaani (official
                selection at Pune Short Film Festival, 2015). In 2019, I founded
                Vijesha Films. In 2022, I produced my first project, Mera Pahad
                Mera Himala, a real-life inspired music video featured on Zee Music.
              </p>
              <p>
                I believe in values, philosophy, or vision and am committed to what
                drives you. Whether you&apos;re looking for service, collaboration, or
                product, I&apos;d love to connect and see how we can work together.
              </p>
              <p>Feel free to contact, explore my portfolio.</p>
            </div>
            <div className={styles.hireBtnDiv}>
              <Link href="/contact" className={styles.hireBtn}>
                Hire Me Now
              </Link>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <div className={styles.glowBorder}></div>
              <Image
                src="/aboutme.jpg"
                alt="Raaj Dhoundiyal with camera equipment"
                width={400}
                height={500}
                className={styles.aboutImage}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
