import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import styles from './layout.module.css';

export default async function DashboardLayout({ children }) {
  const session = await auth();

  if (!session) {
    redirect('/api/auth/signin');
  }

  return (
    <div className={styles.dashboardContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>My Account</h2>
          <p>{session.user?.email}</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navLink}>
            Overview
          </Link>
          <Link href="/dashboard/orders" className={styles.navLink}>
            Order History
          </Link>
          {session.user?.role === 'admin' && (
            <Link href="/admin" className={`${styles.navLink} ${styles.adminLink}`}>
              Admin Panel
            </Link>
          )}
          <Link href="/api/auth/signout" className={styles.navLink}>
            Sign Out
          </Link>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
