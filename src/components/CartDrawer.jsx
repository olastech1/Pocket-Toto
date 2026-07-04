'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, cartTotal } =
    useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={closeCart} />

      {/* Drawer */}
      <div className={styles.drawer}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.headerTitle}>Your Cart</h2>
          <button
            className={styles.closeBtn}
            onClick={closeCart}
            aria-label="Close cart"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          /* Empty State */
          <div className={styles.emptyState}>
            <svg
              className={styles.emptyIcon}
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p className={styles.emptyText}>Your cart is empty</p>
            <Link
              href="/products"
              className={styles.emptyBtn}
              onClick={closeCart}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className={styles.itemsList}>
              {items.map((item) => (
                <div key={item.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      width={64}
                      height={64}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemPrice}>
                      ${Number(item.price).toFixed(2)} each
                    </span>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className={styles.qtyValue}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className={styles.footer}>
              <div className={styles.subtotal}>
                <span>Subtotal</span>
                <span className={styles.subtotalValue}>
                  ${Number(cartTotal).toFixed(2)}
                </span>
              </div>
              <button className={styles.checkoutBtn}>Checkout</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
