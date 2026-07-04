import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  boolean,
  numeric,
  json,
} from 'drizzle-orm/pg-core';

// ─── Products ────────────────────────────────────────────────────────────────
export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  compareAtPrice: numeric('compare_at_price', { precision: 10, scale: 2 }),
  category: text('category').notNull(),
  imageUrl: text('image_url'),
  images: json('images').$type(),       // string[]
  inStock: boolean('in_stock').default(true),
  featured: boolean('featured').default(false),
  rating: numeric('rating', { precision: 2, scale: 1 }),
  reviewCount: integer('review_count').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

// ─── Blog Posts ──────────────────────────────────────────────────────────────
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt'),
  content: text('content'),             // HTML / rich-text
  coverImage: text('cover_image'),
  author: text('author').notNull(),
  tags: json('tags').$type(),            // string[]
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow(),
});

// ─── Categories ──────────────────────────────────────────────────────────────
export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  slug: text('slug').notNull().unique(),
  description: text('description'),
  imageUrl: text('image_url'),
});
