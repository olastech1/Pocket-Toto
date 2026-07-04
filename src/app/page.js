import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import BlogCard from '@/components/BlogCard';
import { getFeaturedProducts, getBlogPosts, getCategories } from '@/db';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  const products = await getFeaturedProducts();
  const posts = await getBlogPosts();
  const categories = await getCategories();

  return (
    <>
      <Hero />

      <section className={styles.featuredSection}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800 }}>
              Curated Picks
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0.5rem auto 0' }}>
              Handpicked essentials chosen for quality, design, and timelessness.
            </p>
          </div>
          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className="container">
          <header style={{ marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800 }}>
              Shop by Category
            </h2>
          </header>
          <div className={styles.categoryGrid}>
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products?category=${cat.slug}`} className={styles.categoryCard}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image
                    src={cat.imageUrl}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className={styles.categoryImage}
                  />
                  <div className={styles.categoryOverlay} />
                  <div className={styles.categoryContent}>
                    <h3 className={styles.categoryName}>{cat.name}</h3>
                    <p className={styles.categoryDesc}>{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className="container">
          <header style={{ marginBottom: 'var(--space-2xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800 }}>
                Stories & Guides
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                Insights on premium lifestyle and intentional living.
              </p>
            </div>
            <Link href="/blog" className="btn-secondary">
              View All
            </Link>
          </header>
          <div className={styles.blogGrid}>
            {posts.slice(0, 3).map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className="container">
          <div className={styles.newsletterCard}>
            <h2 className={styles.newsletterTitle}>Join the Inner Circle</h2>
            <p className={styles.newsletterSubtitle}>
              Get early access to new drops, exclusive offers, and curated content.
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className={styles.newsletterInput}
              />
              <button type="submit" className={styles.newsletterSubmit}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              <h3 className={styles.trustTitle}>Free Shipping</h3>
              <p className={styles.trustDesc}>Complimentary shipping on all orders over $150 worldwide.</p>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <h3 className={styles.trustTitle}>Easy Returns</h3>
              <p className={styles.trustDesc}>30-day return policy for a full refund or exchange.</p>
            </div>
            <div className={styles.trustItem}>
              <svg className={styles.trustIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className={styles.trustTitle}>Secure Checkout</h3>
              <p className={styles.trustDesc}>Your payment information is encrypted and secure.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
