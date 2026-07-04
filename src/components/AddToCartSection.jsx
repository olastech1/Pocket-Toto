'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './AddToCartSection.module.css';

export default function AddToCartSection({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const decrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.quantityRow}>
        <button
          className={`${styles.qtyBtn} ${styles.qtyBtnLeft}`}
          onClick={decrement}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <div className={styles.qtyDisplay}>{quantity}</div>
        <button
          className={`${styles.qtyBtn} ${styles.qtyBtnRight}`}
          onClick={increment}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <button
        className={`${styles.addBtn} ${added ? styles.addBtnAdded : ''}`}
        onClick={handleAdd}
      >
        {added ? 'Added to Cart ✓' : 'Add to Cart'}
      </button>
    </div>
  );
}
