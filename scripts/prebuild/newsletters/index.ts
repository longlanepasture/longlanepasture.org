import { readdir } from "node:fs/promises";
import { join } from "node:path";

export async function newsletters(): Promise<string> {
	const dirContent = await readdir(
		join(process.cwd(), "public", "assets", "newsletters"),
	);
	const files = dirContent
		.filter((file) => file.match(/\.(pdf)$/i))
		.map((file) => ({
			url: `/assets/newsletters/${file}`,
			issue: file.match(/^llp-newsletter(?<number>\w+)-/)?.groups?.number, // could be 28a
			date: file
				.match(/(?<date>[^-]+-+\d+)\.pdf/)
				?.groups?.date.replace(/-/g, " ")
				.replace(/^(.)/, (letter) => letter.toUpperCase()), // could be "June 2024", could be "Autumn/Winter 2014"
		}))
		.sort((a, b) => {
			if (a.issue && b.issue) {
				return parseInt(b.issue) - parseInt(a.issue);
			}
			return 0;
		});
	const audios = dirContent
		.filter((file) => file.match(/\.(mp3)$/i))
		.map((file) => ({
			url: `/assets/newsletters/${file}`,
			issue: file.match(/^llp-newsletter(?<number>\w+)-/)?.groups?.number,
			date: file
				.match(/(?<date>[^-]+-+\d+)\.mp3/)
				?.groups?.date.replace(/-/g, " ")
				.replace(/^(.)/, (letter) => letter.toUpperCase()),
		}))
		.sort((a, b) => {
			if (a.issue && b.issue) {
				return parseInt(b.issue) - parseInt(a.issue);
			}
			return 0;
		});
	return [
		"/* This file is generated automatically from '/public/assets/newsletters' */",
		`export const newsletters: {url: string, issue?: string, date?: string}[] = ${JSON.stringify(
			files,
			null,
			2,
		)};`,
		`export const audioNewsletters: {url: string, issue?: string, date?: string}[] = ${JSON.stringify(
			audios,
			null,
			2,
		)};`,
	].join("\n");
}
