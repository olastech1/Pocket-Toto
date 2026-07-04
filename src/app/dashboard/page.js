import { auth } from '@/auth';

export const metadata = {
  title: 'Dashboard | Pocket Toto',
};

export default async function DashboardOverview() {
  const session = await auth();

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
        Welcome back, {session.user?.name || session.user?.email}
      </h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        From your account dashboard you can view your recent orders and manage your account details.
      </p>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Profile Details</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong>Email:</strong> {session.user?.email}</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong>Role:</strong> {session.user?.role}</p>
        </div>
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Recent Orders</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No recent orders found.</p>
        </div>
      </div>
    </div>
  );
}
