'use server';

import { db } from '@/db';
import { products, orders, users } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { auth } from '@/auth';

// Helper to verify admin permissions
async function requireAdmin() {
  const session = await auth();
  if (!session || session.user?.role !== 'admin') {
    throw new Error('Unauthorized');
  }
}

// ─── Products ────────────────────────────────────────────────────────────────
export async function addProduct(formData) {
  await requireAdmin();
  
  const name = formData.get('name');
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const description = formData.get('description');
  const price = formData.get('price');
  const category = formData.get('category');
  const imageUrl = formData.get('imageUrl') || '/images/products/notebook.jpg'; // default fallback
  const inStock = formData.get('inStock') === 'true';

  await db.insert(products).values({
    name,
    slug,
    description,
    price,
    category,
    imageUrl,
    inStock,
    images: [imageUrl],
  });

  revalidatePath('/admin/products');
  revalidatePath('/products');
}

export async function deleteProduct(id) {
  await requireAdmin();
  await db.delete(products).where(eq(products.id, id));
  revalidatePath('/admin/products');
  revalidatePath('/products');
}

export async function toggleProductStock(id, currentStatus) {
  await requireAdmin();
  await db.update(products).set({ inStock: !currentStatus }).where(eq(products.id, id));
  revalidatePath('/admin/products');
  revalidatePath('/products');
}

// ─── Orders ──────────────────────────────────────────────────────────────────
export async function updateOrderStatus(orderId, status) {
  await requireAdmin();
  await db.update(orders).set({ status }).where(eq(orders.id, orderId));
  revalidatePath('/admin/orders');
}

// ─── Users ───────────────────────────────────────────────────────────────────
export async function updateUserRole(userId, role) {
  await requireAdmin();
  await db.update(users).set({ role }).where(eq(users.id, userId));
  revalidatePath('/admin/users');
}
