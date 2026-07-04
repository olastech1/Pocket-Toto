import { auth } from '@/auth';
import { db } from '@/db';
import { orders } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

export const metadata = {
  title: 'Order History | Pocket Toto',
};

export default async function OrdersHistory() {
  const session = await auth();
  
  // Note: in a real app, this query would use the user ID. 
  // Since we haven't wired the checkout to create orders yet, this will be empty.
  let userOrders = [];
  try {
    userOrders = await db.select().from(orders).where(eq(orders.userId, session.user.id)).orderBy(desc(orders.createdAt));
  } catch (error) {
    console.error("Orders table might not exist yet or failed to fetch:", error);
  }

  return (
    <div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
        Order History
      </h1>

      {userOrders.length === 0 ? (
        <div style={{ background: 'var(--bg-secondary)', padding: '3rem', textAlign: 'center', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border)' }}>
          <p style={{ color: 'var(--text-muted)' }}>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {userOrders.map(order => (
            <div key={order.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)' }}>
              <div>
                <h4 style={{ color: 'var(--text-primary)' }}>Order #{order.id}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  Placed on {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontWeight: 700, color: 'var(--text-primary)' }}>${Number(order.total).toFixed(2)}</p>
                <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
