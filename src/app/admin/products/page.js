import { db } from '@/db';
import { products } from '@/db/schema';
import { desc } from 'drizzle-orm';
import ProductClient from './ProductClient';

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

  return <ProductClient products={allProducts} />;
}
