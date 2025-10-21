import { readdir } from "node:fs/promises";
import { join } from "node:path";

export async function volunteers(): Promise<string> {
	const dirContent = await readdir(
		join(process.cwd(), "public", "assets", "volunteers"),
	);
	const files = dirContent
		.filter((file) => file.match(/\.(jpe?g|png|gif|webp|svg)$/i))
		.map((file) => ({
			src: `/assets/volunteers/${file}`,
			alt: file.replace(/\..*/, ""),
		}));
	return [
		"/* This file is generated automatically from '/public/assets/volunteers' */",
		`export const volunteers = ${JSON.stringify(files, null, 2)};`,
	].join("\n");
}
