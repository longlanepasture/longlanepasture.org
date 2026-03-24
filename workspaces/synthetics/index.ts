import { expect, test } from "@playwright/test";
import { season } from "../../lib/helpers/season";

test("sanity test: website loads", async ({ page }) => {
	await page.goto("/");
	await expect(page).toHaveTitle(/Long Lane Pasture/);
});

test("navigate to 'Visit' page", async ({ page }) => {
	await page.goto("/");
	await page.getByText("Visit").first().click();
	await expect(page).toHaveURL("/visit/");
});

test("navigate image gallery slide", async ({ page }) => {
	await page.goto("/");
	await expect(
		page.getByLabel("Go to Slide 1").first().getAttribute("style"),
	).resolves.not.toContain("transform: translate3d(-100%, 0px, 0px)");
	await page.getByLabel("Next Slide").click();
	await expect(
		page.getByLabel("Go to Slide 1").first().getAttribute("style"),
	).resolves.toContain("transform: translate3d(-100%, 0px, 0px)");
});

test("seasons are represented in order", async ({ page }) => {
	await page.goto("/");
	const firstTableRow = page.locator("table tr td").first();
	await expect(firstTableRow).toContainText(season.winter ? "🌧" : "☀️");
});
