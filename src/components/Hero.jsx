import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/hero-banner.jpg"
        fill
        priority
        className={styles.bgImage}
        alt="Pocket Toto collection"
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>POCKET TOTO COLLECTION</span>
        <h1 className={styles.heading}>
          Curated for the
          <br />
          <span className={styles.accentText}>Extraordinary</span>
        </h1>
        <p className={styles.subtitle}>
          Discover handpicked premium accessories, tech, and lifestyle essentials
          — designed for those who appreciate the finer details.
        </p>
        <div className={styles.cta}>
          <Link href="/products" className="btn-primary">
            Shop Collection
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read Our Story
          </Link>
        </div>
      </div>

      <div className={styles.orb} aria-hidden="true" />
    </section>
  );
}
