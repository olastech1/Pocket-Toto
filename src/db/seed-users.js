import { db } from './index.js';
import { users } from './schema.js';
import bcrypt from 'bcryptjs';

async function seedUsers() {
  console.log('Seeding users...');
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('password123', salt);

  try {
    await db.insert(users).values([
      {
        name: 'Admin User',
        email: 'admin@pockettoto.com',
        password: hashedPassword,
        role: 'admin',
      },
      {
        name: 'Regular User',
        email: 'user@pockettoto.com',
        password: hashedPassword,
        role: 'user',
      }
    ]).onConflictDoNothing();
    
    console.log('✅ Users seeded successfully!');
    console.log('Admin login: admin@pockettoto.com / password123');
    console.log('User login: user@pockettoto.com / password123');
  } catch (error) {
    console.error('Failed to seed users:', error);
  }
  
  process.exit(0);
}

seedUsers();
