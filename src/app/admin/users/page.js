import { db } from '@/db';
import { users } from '@/db/schema';
import UserClient from './UserClient';

export const metadata = {
  title: 'Manage Users | Admin',
};

export default async function AdminUsers() {
  let allUsers = [];
  try {
    allUsers = await db.select().from(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }

  return <UserClient users={allUsers} />;
}
