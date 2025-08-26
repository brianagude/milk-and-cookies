import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

export async function POST(req: NextRequest) {
	try {
		const { body, isValidSignature } = await parseBody<{
			_type: string;
			slug?: string | { current: string };
		}>(req);

		if (!isValidSignature) {
			return new Response("Invalid signature", { status: 401 });
		}
		if (!body?._type) {
			return new Response("Missing document type", { status: 400 });
		}

		const tagsToRevalidate: string[] = [body._type];

		const slug = typeof body.slug === "string" ? body.slug : body.slug?.current;
		if (slug) {
			tagsToRevalidate.push(`${body._type}:${slug}`);
		}

		await Promise.all(tagsToRevalidate.map((tag) => revalidateTag(tag)));

		return NextResponse.json({ revalidated: true, tags: tagsToRevalidate });
	} catch (error: unknown) {
		let message = "Unknown error";
		if (error instanceof Error) message = error.message;
		return new Response(message, { status: 500 });
	}
}
