import { db } from '@/db';
import { orders } from '@/db/schema';
import { desc } from 'drizzle-orm';

export const metadata = {
  title: 'Manage Orders | Admin',
};

export default async function AdminOrders() {
  let allOrders = [];
  try {
    allOrders = await db.select().from(orders).orderBy(desc(orders.createdAt));
  } catch (error) {
    console.error("Failed to fetch orders:", error);
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
        Orders
      </h1>

      <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--glass-bg)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Order ID</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Date</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Total</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No orders found.</td>
              </tr>
            ) : (
              allOrders.map(order => (
                <tr key={order.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>#{order.id}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>${Number(order.total).toFixed(2)}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      padding: '0.2rem 0.5rem', 
                      background: 'rgba(245, 158, 11, 0.15)', 
                      color: 'var(--accent)', 
                      borderRadius: 'var(--radius-full)', 
                      fontSize: '0.75rem', 
                      fontWeight: 600,
                      textTransform: 'uppercase'
                    }}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
