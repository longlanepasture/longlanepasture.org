import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { parse } from "yaml";

export async function amenities() {
	const file = await readFile(
		join(process.cwd(), "src", "amenities", "index.yml"),
		"utf8",
	);
	const data = parse(file);
	return [
		"/* This file is generated automatically from '/src/amenities/index.yml' */",
		`export const amenities: {name: string, description: string, available: boolean}[] = ${JSON.stringify(data, null, 2)};`,
	].join("\n");
}
