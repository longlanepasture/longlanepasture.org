const GOOGLE_DOMAIN = "https://www.google.com";
const GOOGLE_MAPS_DOMAIN = "https://maps.googleapis.com";

/**
 * Attach custom headers for Cloudflare Pages
 */
export async function headers(): Promise<string> {
	const table: string[][] = [
		["Access-Control-Allow-Origin", "*"],
		["X-Robots-Tag", "all"],
		["X-XSS-Protection", "1"],
		// Must include 'unsafe-inline' because Next uses inline scripts
		[
			"Content-Security-Policy",
			`default-src 'self' ${GOOGLE_MAPS_DOMAIN} 'unsafe-inline'`,
			`script-src 'self' ${GOOGLE_MAPS_DOMAIN} 'unsafe-inline'`,
			"object-src 'self'",
			`frame-src ${GOOGLE_DOMAIN}`,
			`img-src 'self' ${GOOGLE_MAPS_DOMAIN}`,
			`child-src ${GOOGLE_MAPS_DOMAIN}`,
		],
		["Permissions-Policy", `geolocation=("${GOOGLE_MAPS_DOMAIN}")`],
	];
	const headers = table
		.map(([name, ...rest]) => ["\t", name, ": ", rest.join("; ")].join(""))
		.join("\n");

	return `# This file is generated automatically from '/scripts/postbuild/headers/index.ts'
/*
${headers}
`;
}
