import { db } from '@/db';
import { orders, users, products } from '@/db/schema';
import { count } from 'drizzle-orm';

export const metadata = {
  title: 'Admin Dashboard | Pocket Toto',
};

export default async function AdminOverview() {
  let orderCount = 0;
  let userCount = 0;
  let productCount = 0;

  try {
    const [ordersResult] = await db.select({ value: count() }).from(orders);
    const [usersResult] = await db.select({ value: count() }).from(users);
    const [productsResult] = await db.select({ value: count() }).from(products);
    
    orderCount = ordersResult.value;
    userCount = usersResult.value;
    productCount = productsResult.value;
  } catch (error) {
    console.error("Failed to fetch admin metrics:", error);
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
        Dashboard Overview
      </h1>

      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total Sales</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>$0.00</p>
        </div>
        
        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Total Orders</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{orderCount}</p>
        </div>

        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Registered Users</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{userCount}</p>
        </div>

        <div style={{ background: 'var(--glass-bg)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Products</h3>
          <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{productCount}</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', background: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '1.5rem' }}>Revenue Overview (Mock Data)</h3>
        
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', gap: '2%', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
          {[30, 50, 40, 70, 60, 90, 80].map((height, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '100%', 
                height: `${height}%`, 
                background: i === 6 ? 'var(--gradient-accent)' : 'var(--glass-bg)',
                borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
                transition: 'height var(--transition-base)'
              }} />
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>
    </div>
  );
}
