/**
 * Create content for humans.txt
 */
export async function humans({
	datestamp,
}: {
	datestamp: string;
}): Promise<string> {
	return Object.entries({
		TEAM: {
			"Long Lane Pasture Trust": null,
			Contact: "longlanepasture@gmail.com",
			From: "Finchley, London, UK",
		},
		SITE: {
			"Last update": datestamp,
			Language: "en-GB",
			Doctype: "HTML5",
		},
	})
		.map(([section, data]) =>
			[
				`/* ${section} */`,
				...Object.entries(data).map(([key, value]) =>
					[`\t${key}`, value].filter(Boolean).join(": "),
				),
				"",
			].join("\n"),
		)
		.join("\n");
}
