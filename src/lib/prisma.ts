import "dotenv/config";
import { PrismaClient } from '../../prisma/src/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL;

// Create connection pool and the adapter
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// Create prisma client singleton
const prismaClientSingleton = () => {
  return new PrismaClient({ adapter });
};

// 3. Global Object Handling (prevents hot-reload crashes)
const globalForPrisma = global
const prisma = globalForPrisma.prisma || prismaClientSingleton()
export default prisma
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma