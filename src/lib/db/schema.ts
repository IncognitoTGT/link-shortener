import { createId } from "@/lib/utils";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
	id: text("id").primaryKey().notNull().unique().$defaultFn(createId),
	url: text("url").notNull(),
	createdAt: timestamp("created_at").notNull().defaultNow(),
	expiresAt: timestamp("expires_at")
		.notNull()
		.$defaultFn(() => {
			const date = new Date();
			date.setDate(date.getDate() + 30);
			return date;
		}),
});
