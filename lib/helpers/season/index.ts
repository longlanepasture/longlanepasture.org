type seasonName = "winter" | "summer";

export const season: {
	WINTER: seasonName;
	SUMMER: seasonName;
	name: seasonName;
	winter: boolean;
	summer: boolean;
} = {
	WINTER: "winter",
	SUMMER: "summer",
	get name(): seasonName {
		return new Date().getMonth() >= 10 || new Date().getMonth() <= 2
			? season.WINTER
			: season.SUMMER;
	},
	get winter(): boolean {
		return this.name === season.WINTER;
	},
	get summer(): boolean {
		return this.name === season.SUMMER;
	},
};
