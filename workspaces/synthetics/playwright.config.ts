import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testMatch: "index.ts",
	use: {
		baseURL: "http://localhost:3000",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
});
