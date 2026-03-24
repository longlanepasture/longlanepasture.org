import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testMatch: "index.ts",
	use: {
		baseURL: "https://longlanepasture.org",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
});
