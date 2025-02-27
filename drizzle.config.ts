import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "testing123",
    database: "postgres",
    ssl: false,
  },
});