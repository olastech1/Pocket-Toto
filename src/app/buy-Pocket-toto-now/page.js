import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Buy Pocket Toto Now | Limited Availability',
  description: 'Experience the pinnacle of everyday carry. Secure your Pocket Toto premium essentials today.',
};

export default function BuyPocketTotoNow() {
  return (
    <div className={styles.landingContainer}>
      {/* Immersive Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.ambientGlow} />
        <div className={styles.heroContent}>
          <div className={styles.badge}>Limited Edition Release</div>
          <h1 className={styles.heroTitle}>
            Redefine Your<br/>
            <span className={styles.gradientText}>Everyday Carry.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Uncompromising quality. Minimalist aesthetic. The Pocket Toto collection is finally here.
          </p>
          <div className={styles.ctaWrapper}>
            <Link href="/products" className={styles.primaryCta}>
              Shop The Collection
              <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </div>
        
        {/* Floating Product Elements */}
        <div className={styles.floatingShowcase}>
          <div className={`${styles.floatItem} ${styles.float1}`}>
            <Image src="/images/products/watch.jpg" alt="Aurelius Timepiece" width={250} height={250} className={styles.floatImg} />
          </div>
          <div className={`${styles.floatItem} ${styles.float2}`}>
            <Image src="/images/products/leather-bag.jpg" alt="Heritage Bag" width={300} height={300} className={styles.floatImg} />
          </div>
          <div className={`${styles.floatItem} ${styles.float3}`}>
            <Image src="/images/products/earbuds.jpg" alt="Noir Earbuds" width={200} height={200} className={styles.floatImg} />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <h2 className={styles.sectionTitle}>Designed for the Extraordinary</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>✦</div>
            <h3>Master Craftsmanship</h3>
            <p>Every stitch, every curve, engineered to absolute perfection using premium sustainable materials.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>◆</div>
            <h3>Radical Minimalism</h3>
            <p>Stripping away the unnecessary to leave only what matters. Form and function in perfect harmony.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>✧</div>
            <h3>Exclusive Production</h3>
            <p>We don't mass produce. Each batch is strictly limited to ensure uncompromising quality control.</p>
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marquee}>
          <span>PREMIUM ESSENTIALS • NO COMPROMISES • ELEVATE YOUR STANDARDS • PREMIUM ESSENTIALS • NO COMPROMISES • ELEVATE YOUR STANDARDS • </span>
        </div>
      </div>

      {/* Final Action Section */}
      <section className={styles.finalSection}>
        <div className={styles.finalContent}>
          <h2 className={styles.finalTitle}>Don't Miss Out.</h2>
          <p className={styles.finalSubtitle}>Our initial batch sold out in 48 hours. Secure yours before they're gone again.</p>
          <Link href="/products" className={styles.glowButton}>
            Unlock Pocket Toto
          </Link>
        </div>
      </section>
    </div>
  );
}
