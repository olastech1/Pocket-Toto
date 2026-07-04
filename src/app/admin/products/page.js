import { db } from '@/db';
import { products } from '@/db/schema';
import { desc } from 'drizzle-orm';

export const metadata = {
  title: 'Manage Products | Admin',
};

export default async function AdminProducts() {
  let allProducts = [];
  try {
    allProducts = await db.select().from(products).orderBy(desc(products.createdAt));
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--text-primary)' }}>
          Products
        </h1>
        <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
          + Add Product
        </button>
      </div>

      <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'var(--glass-bg)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Name</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Category</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Price</th>
              <th style={{ padding: '1rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map(product => (
              <tr key={product.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>{product.name}</td>
                <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'capitalize' }}>{product.category}</td>
                <td style={{ padding: '1rem', color: 'var(--text-primary)' }}>${Number(product.price).toFixed(2)}</td>
                <td style={{ padding: '1rem' }}>
                  <span style={{ 
                    padding: '0.2rem 0.5rem', 
                    background: product.inStock ? 'rgba(34, 197, 94, 0.15)' : 'rgba(239, 68, 68, 0.15)', 
                    color: product.inStock ? 'var(--success)' : 'var(--error)', 
                    borderRadius: 'var(--radius-full)', 
                    fontSize: '0.75rem', 
                    fontWeight: 600 
                  }}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
