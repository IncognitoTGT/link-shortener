import { defineConfig } from "drizzle-kit";
export default defineConfig({
	dialect: "postgresql",
	out: "./src/lib/db",
	schema: "./src/lib/db/schema.ts",
	dbCredentials: {
		url: process.env.DATABASE_URL as string,
	},
	verbose: true,
	strict: true,
});
