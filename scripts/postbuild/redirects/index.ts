/**
 * Create redirects on Cloudflare Pages
 * https://developers.cloudflare.com/pages/configuration/redirects/
 *
 * Redirect pages from the old site to the new site
 */
export async function redirects() {
	return [
		["/aboutthepasture*", "/history/", "301"],
		[
			"/aboutthepasture/LLP-ManagementPlan.pdf",
			"/assets/documents/llp-management-plan.pdf",
			"301",
		],
		["/assets/records*", "/the-trust/", "301"],
		[
			"/donate",
			"https://www.gofundme.com/f/buy-long-lane-pastures-new-equipment/donate",
			"307",
		],
		[
			"/donate/",
			"https://www.gofundme.com/f/buy-long-lane-pastures-new-equipment/donate",
			"307",
		],
		["/events*", "/", "301"],
		["/getinvolved*", "/contribute/", "301"],
		["/news*", "/history/", "301"],
		["/newsletters*", "/history/#newsletters", "301"],
		["/photogallery*", "/photos/", "301"],
		["/thetrust*", "/the-trust/", "301"],
		["/visitor-information/", "/visit/", "301"],
		["/visitorinfo.html", "/visit/", "301"],
	]
		.map((line) => line.join(" "))
		.join("\n");
}
