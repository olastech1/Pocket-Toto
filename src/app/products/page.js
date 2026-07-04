import { getProducts, getCategories, getProductsByCategory } from '@/db';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Shop All Products | Pocket Toto',
  description: 'Browse our curated collection of premium accessories, tech, lifestyle essentials, and footwear.',
};

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const categoryFilter = params?.category || null;

  const categories = await getCategories();
  const products = categoryFilter 
    ? await getProductsByCategory(categoryFilter)
    : await getProducts();

  const currentCategory = categoryFilter 
    ? categories.find(c => c.slug === categoryFilter)?.name || 'Products'
    : 'Shop All';

  return (
    <main className="container">
      <header className={styles.pageHeader}>
        <h1 className={styles.title}>{currentCategory}</h1>
        <p className={styles.count}>{products.length} products</p>
        
        <div className={styles.filters}>
          <Link 
            href="/products" 
            className={`${styles.filterPill} ${!categoryFilter ? styles.filterPillActive : ''}`}
          >
            All
          </Link>
          {categories.map(cat => (
            <Link 
              key={cat.id} 
              href={`/products?category=${cat.slug}`}
              className={`${styles.filterPill} ${categoryFilter === cat.slug ? styles.filterPillActive : ''}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </header>

      {products.length > 0 ? (
        <div className={styles.grid}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
          <p>No products found in this category.</p>
        </div>
      )}
    </main>
  );
}
