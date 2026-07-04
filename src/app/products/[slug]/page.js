import { getProducts, getProductBySlug } from '@/db';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import AddToCartSection from '@/components/AddToCartSection';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} | Pocket Toto`,
    description: product.description,
    openGraph: {
      images: [product.imageUrl],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <main className="container">
      <BreadcrumbJsonLd 
        items={[
          { name: 'Home', url: 'https://pocket-toto.com' },
          { name: 'Shop', url: 'https://pocket-toto.com/products' },
          { name: product.name, url: `https://pocket-toto.com/products/${product.slug}` }
        ]} 
      />
      <ProductJsonLd product={product} />

      <div className={styles.productPage}>
        <div className={styles.productGrid}>
          <div className={styles.imageWrap}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />
          </div>

          <div className={styles.details}>
            <div className={styles.category}>{product.category}</div>
            <h1 className={styles.name}>{product.name}</h1>
            
            {product.rating && (
              <div className={styles.ratingRow}>
                <div className={styles.stars}>
                  {'★'.repeat(Math.floor(product.rating))}
                  {'☆'.repeat(5 - Math.floor(product.rating))}
                </div>
                <span className={styles.reviews}>({product.reviewCount} reviews)</span>
              </div>
            )}

            <div className={styles.priceSection}>
              <span className={styles.currentPrice}>${Number(product.price).toFixed(2)}</span>
              {product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price) && (
                <span className={styles.originalPrice}>${Number(product.compareAtPrice).toFixed(2)}</span>
              )}
            </div>

            <p className={styles.description}>{product.description}</p>
            
            <AddToCartSection product={product} />
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              You May Also Like
            </h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
