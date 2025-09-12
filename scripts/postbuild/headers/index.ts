const GOOGLE_DOMAIN = "https://www.google.com";
const GOOGLE_MAPS_DOMAIN = "https://maps.googleapis.com";

/**
 * Attach custom headers for Cloudflare Pages
 */
export async function headers(): Promise<string> {
	const tables: { [key: string]: string[][] } = {
		"/*": [
			["Access-Control-Allow-Origin", "*"],
			["X-Robots-Tag", "all"],
			// Must include 'unsafe-inline' because Next uses inline scripts
			[
				"Content-Security-Policy",
				`default-src 'self' ${GOOGLE_MAPS_DOMAIN} 'unsafe-inline'`,
				`script-src 'self' ${GOOGLE_MAPS_DOMAIN} 'unsafe-inline' 'unsafe-eval'`,
				"object-src 'self'",
				`frame-src ${GOOGLE_DOMAIN}`,
				`img-src 'self' ${GOOGLE_MAPS_DOMAIN}`,
				`child-src ${GOOGLE_MAPS_DOMAIN}`,
			],
			["Document-Policy", "document-write=?0"],
			["Cross-Origin-Opener-Policy", "same-origin"],
			["Permissions-Policy", `geolocation=("${GOOGLE_MAPS_DOMAIN}")`],
		],
	};
	const headers = Object.entries(tables)
		.map(([path, table]) => [
			path,
			table.map(([name, ...rest]) =>
				["\t", name, ": ", rest.join("; ")].join(""),
			),
		])
		.flat()
		.flat()
		.join("\n");
	return `# This file is generated automatically from '/scripts/postbuild/headers/index.ts'
${headers}
`;
}
