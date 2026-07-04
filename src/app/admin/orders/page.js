import { db } from '@/db';
import { orders } from '@/db/schema';
import { desc } from 'drizzle-orm';
import OrderClient from './OrderClient';

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

  return <OrderClient orders={allOrders} />;
}
