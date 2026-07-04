import { products, blogPosts, categories } from './schema';
import { mockProducts, mockCategories, mockBlogPosts } from './mock-data';

// ─── Conditional DB connection ───────────────────────────────────────────────
let db = null;

if (process.env.DATABASE_URL) {
  // Dynamic imports keep Neon deps out of the bundle when unused
  const { neon } = await import('@neondatabase/serverless');
  const { drizzle } = await import('drizzle-orm/neon-http');

  const sql = neon(process.env.DATABASE_URL);
  db = drizzle(sql, { schema: { products, blogPosts, categories } });
}

const isConnected = () => db !== null;

// ─── Helper utilities ────────────────────────────────────────────────────────
import { eq } from 'drizzle-orm';

// ─── Products ────────────────────────────────────────────────────────────────

export async function getProducts() {
  if (!isConnected()) return mockProducts;
  return db.select().from(products);
}

export async function getProductBySlug(slug) {
  if (!isConnected()) {
    return mockProducts.find((p) => p.slug === slug) ?? null;
  }
  const rows = await db.select().from(products).where(eq(products.slug, slug));
  return rows[0] ?? null;
}

export async function getFeaturedProducts() {
  if (!isConnected()) {
    return mockProducts.filter((p) => p.featured);
  }
  return db.select().from(products).where(eq(products.featured, true));
}

export async function getProductsByCategory(category) {
  if (!isConnected()) {
    return mockProducts.filter((p) => p.category === category);
  }
  return db.select().from(products).where(eq(products.category, category));
}

// ─── Categories ──────────────────────────────────────────────────────────────

export async function getCategories() {
  if (!isConnected()) return mockCategories;
  return db.select().from(categories);
}

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export async function getBlogPosts() {
  if (!isConnected()) return mockBlogPosts;
  return db.select().from(blogPosts);
}

export async function getBlogPostBySlug(slug) {
  if (!isConnected()) {
    return mockBlogPosts.find((p) => p.slug === slug) ?? null;
  }
  const rows = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
  return rows[0] ?? null;
}

// Re-export for convenience
export { db, isConnected };
