import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import styles from './layout.module.css';

export default async function AdminLayout({ children }) {
  const session = await auth();

  // Protect Admin route
  if (!session || session.user?.role !== 'admin') {
    redirect('/dashboard');
  }

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Pocket Toto Admin</h2>
          <p className={styles.badge}>Admin Console</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/admin" className={styles.navLink}>
            Dashboard
          </Link>
          <Link href="/admin/products" className={styles.navLink}>
            Products
          </Link>
          <Link href="/admin/orders" className={styles.navLink}>
            Orders
          </Link>
          <Link href="/admin/users" className={styles.navLink}>
            Users
          </Link>
          <Link href="/dashboard" className={`${styles.navLink} ${styles.returnLink}`}>
            Return to Store
          </Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
