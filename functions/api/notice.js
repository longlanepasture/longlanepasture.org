import { isbot } from "isbot";

export function onRequest(context) {
	const userAgent = context.request.headers.get("User-Agent");
	const responseText = isbot(userAgent) ? "false" : context.env.NOTICE;
	return new Response(responseText, {
		status: 200,
		headers: {
			"Content-Type": "text/plain",
			"Cache-Control": "public, max-age=600",
		},
	});
}
