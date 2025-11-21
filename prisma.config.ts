import { config } from "dotenv";
import { resolve } from "path";
import { defineConfig } from "prisma/config";

// Load .env.local with absolute path
config({ path: resolve(process.cwd(), ".env.local") });

// Debug: check if it loaded (remove this after testing)
console.log("DATABASE_URL loaded:", !!process.env.DATABASE_URL);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || "",
  },
});
