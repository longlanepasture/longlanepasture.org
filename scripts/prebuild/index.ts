import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { amenities } from "./amenities/index.ts";
import { friends } from "./friends/index.ts";
import { gallery } from "./gallery/index.ts";
import { humans } from "./humans/index.ts";
import { navigation } from "./navigation/index.ts";
import { newsletters } from "./newsletters/index.ts";
import { sitemap } from "./sitemap/index.ts";
import { species } from "./species/index.ts";
import { volunteers } from "./volunteers/index.ts";

/**
 * Example: 1970-01-01
 */
const datestamp = new Date().toISOString().split("T").shift() as string;

const setups: [string, Promise<string>][] = [
	["./public/humans.txt", humans({ datestamp })],
	[
		"./public/sitemap.xml",
		sitemap({ base: "https://longlanepasture.org", datestamp }),
	],
	["./dynamic/amenities/index.ts", amenities()],
	["./dynamic/friends/index.ts", friends()],
	["./dynamic/gallery/index.ts", gallery()],
	["./dynamic/navigation/index.ts", navigation()],
	["./dynamic/newsletters/index.ts", newsletters()],
	["./dynamic/species/index.ts", species()],
	["./dynamic/volunteers/index.ts", volunteers()],
];

Promise.all(
	setups.map(
		async ([path, content]): Promise<void> =>
			await writeFileWithDirs(resolve(path), await content),
	),
);

async function writeFileWithDirs(
	filePath: string,
	data: string,
): Promise<void> {
	const dir = dirname(filePath);
	await mkdir(dir, { recursive: true });
	await writeFile(filePath, data);
}
