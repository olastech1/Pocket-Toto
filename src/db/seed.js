import 'dotenv/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { products, blogPosts, categories } from './schema.js';
import { mockProducts, mockCategories, mockBlogPosts } from './mock-data.js';

async function seed() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    console.error('❌  DATABASE_URL is not set. Aborting seed.');
    process.exit(1);
  }

  console.log('🌱  Connecting to database…');
  const sql = neon(url);
  const db = drizzle(sql);

  // ── Idempotent: clear existing data ──────────────────────────────────────
  console.log('🗑   Clearing existing data…');
  await db.delete(products);
  await db.delete(blogPosts);
  await db.delete(categories);

  // ── Seed Categories ──────────────────────────────────────────────────────
  console.log('📂  Seeding categories…');
  for (const cat of mockCategories) {
    const { id, ...data } = cat;
    await db.insert(categories).values(data);
    console.log(`    ✔ ${data.name}`);
  }

  // ── Seed Products ────────────────────────────────────────────────────────
  console.log('📦  Seeding products…');
  for (const prod of mockProducts) {
    const { id, createdAt, ...data } = prod;
    await db.insert(products).values(data);
    console.log(`    ✔ ${data.name}`);
  }

  // ── Seed Blog Posts ──────────────────────────────────────────────────────
  console.log('📝  Seeding blog posts…');
  for (const post of mockBlogPosts) {
    const { id, createdAt, ...data } = post;
    await db.insert(blogPosts).values(data);
    console.log(`    ✔ ${data.title}`);
  }

  console.log('\n✅  Seed complete!');
}

seed().catch((err) => {
  console.error('❌  Seed failed:', err);
  process.exit(1);
});
