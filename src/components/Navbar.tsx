"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroNav.module.css";

interface NavbarProps {
  light?: boolean;
}

export default function Navbar({ light = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          light ? styles.navbarLight : scrolled ? styles.navScrolled : ""
        }`}
      >
        <div className={styles.logo}>
          <Link href="/#hero">
            <Image
              src="/Raaj-Logo1.png"
              alt="Logo"
              width={180}
              height={60}
              priority
              className={styles.logoImg}
            />
          </Link>
        </div>

        <div className={styles.navLinks}>
          <Link
            href="/#about"
            className={`${styles.navLink} ${light ? styles.navLinkLight : ""}`}
          >
            ABOUT ME
          </Link>
          <Link
            href="/#work"
            className={`${styles.navLink} ${light ? styles.navLinkLight : ""}`}
          >
            MY WORK
          </Link>
          <Link
            href="/#gallery"
            className={`${styles.navLink} ${light ? styles.navLinkLight : ""}`}
          >
            GALLERY
          </Link>
          <Link
            href="/contact"
            className={`${styles.navLink} ${light ? styles.navLinkLight : ""}`}
          >
            CONTACT ME
          </Link>
        </div>

        <div className={styles.burgerMenu} onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </nav>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
        <Link href="/#about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
          ABOUT ME
        </Link>
        <Link href="/#work" className={styles.mobileNavLink} onClick={closeMobileMenu}>
          MY WORK
        </Link>
        <Link href="/#gallery" className={styles.mobileNavLink} onClick={closeMobileMenu}>
          GALLERY
        </Link>
        <Link href="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>
          CONTACT ME
        </Link>
      </div>
    </>
  );
}
