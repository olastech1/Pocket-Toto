'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar({ session }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          POCKET<span className={styles.logoDot}>.</span>TOTO
        </Link>

        <nav className={styles.nav}>
          <Link href="/products" className={styles.navLink}>Shop</Link>
          <Link href="/blog" className={styles.navLink}>Blog</Link>
          <Link href="#" className={styles.navLink}>About</Link>
          
          {session ? (
            <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
          ) : (
            <Link href="/api/auth/signin" className={styles.navLink}>Sign In</Link>
          )}
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.cartBtn}
            onClick={toggleCart}
            aria-label="Open cart"
            id="cart-button"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </button>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className={styles.backdrop} onClick={() => setMenuOpen(false)} />
          <div className={styles.mobileMenu}>
            <nav className={styles.mobileNav}>
              <Link href="/products" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/blog" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
              <Link href="#" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                About
              </Link>
              {session ? (
                <Link href="/dashboard" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  Dashboard
                </Link>
              ) : (
                <Link href="/api/auth/signin" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  Sign In
                </Link>
              )}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
