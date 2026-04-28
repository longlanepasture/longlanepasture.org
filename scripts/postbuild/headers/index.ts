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
			["Cross-Origin-Opener-Policy", "same-origin"],
			[
				"Feature-Policy",
				[
					...[
						"accelerometer",
						"ambient-light-sensor",
						"camera",
						"encrypted-media",
						"gyroscope",
						"magnetometer",
						"microphone",
						"midi",
						"payment",
						"picture-in-picture",
						"usb",
						"vibrate",
						"vr",
					].map((feature) => `${feature} 'none'`),
					...["autoplay", "fullscreen", "speaker", "sync-xhr"].map(
						(feature) => `${feature} 'self'`,
					),
					`geolocation ${GOOGLE_MAPS_DOMAIN}`,
				].join("; "),
			],
			["Permissions-Policy", `geolocation=("${GOOGLE_MAPS_DOMAIN}")`],
			["Referrer-Policy", "strict-origin-when-cross-origin"],
			[
				"strict-transport-security",
				"max-age=31536000; includeSubDomains; preload",
			],
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
