'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product, index = 0 }) {
  const { addItem } = useCart();

  const fullStars = Math.floor(product.rating || 0);
  const emptyStars = 5 - fullStars;

  return (
    <div
      className={styles.card}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <Link href={`/products/${product.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className={styles.image}
          />
          {product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price) && (
            <span className={styles.saleBadge}>Sale</span>
          )}
        </div>
      </Link>

      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>

        <Link href={`/products/${product.slug}`} className={styles.name}>
          {product.name}
        </Link>

        <div className={styles.rating}>
          <span className={styles.stars}>
            {'★'.repeat(fullStars)}
            {'☆'.repeat(emptyStars)}
          </span>
          <span className={styles.reviewCount}>
            ({product.reviewCount || 0})
          </span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>
            ${Number(product.price).toFixed(2)}
          </span>
          {product.compareAtPrice && Number(product.compareAtPrice) > Number(product.price) && (
            <span className={styles.comparePrice}>
              ${Number(product.compareAtPrice).toFixed(2)}
            </span>
          )}
        </div>

        <button
          className={styles.addToCart}
          onClick={() => addItem(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
