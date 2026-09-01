import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerlogo}>
        <Link href="/#hero">
          <Image
            src="/footerLogo.png"
            alt="Logo"
            width={120}
            height={120}
            className={styles.footerlogoImg}
          />
        </Link>
      </div>
      <div className={styles.footerContent}>
        <span className={styles.line}></span>
        © Copyright 2025, Raaj Dhoundiyal
        <span className={styles.line}></span>
      </div>
    </footer>
  );
}
