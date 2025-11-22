/**
 * Prisma Client Singleton
 *
 * Creates a single Prisma client instance for database operations.
 * In development, prevents multiple instances during hot-reload.
 * In production, creates one instance per deployment.
 */

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
