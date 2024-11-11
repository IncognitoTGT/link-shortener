import { db } from "@/lib/db";
import { links } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const [fullUrl] = (await db.select().from(links).where(eq(links.id, slug))) || [];
	if (fullUrl) {
		return Response.redirect(fullUrl.url, 301);
	}
	return notFound();
}
