import type { Metadata, Viewport } from "next";
import type { Organization, WebSite, WithContext } from "schema-dts";
import { ClosureNotice } from "./components/ClosureNotice";
import { CustomScriptLoader } from "./components/CustomScriptLoader";
import { NavigationLink } from "./components/NavigationLink";
import { NavList } from "./components/NavList";
import "./layout.css";

export const metadata: Metadata = {
	title: "Long Lane Pasture",
	description:
		"Long Lane Pasture is a wildlife and nature reserve in North London, maintained entirely by volunteers. This community green space offers a peaceful retreat within the city, providing a habitat for diverse wildlife, including birds, insects, and wildflowers. Preserved through local efforts, the pasture serves as a vital urban sanctuary, promoting conservation and education while fostering a connection to nature for visitors of all ages.",
	keywords: [
		"Long Lane Pasture",
		"Finchley",
		"green space",
		"urban wildlife",
		"barnet",
		"meadow",
		"wildlife",
		"nature reserve",
		"north london",
		"volunteer",
		"community",
		"restoration",
	],
	icons: {
		shortcut: "/favicon.ico",
		apple: "/assets/apple-touch-icon.png",
	},
	generator: "https://github.com/longlanepasture/longlanepasture.org",
	openGraph: {
		title:
			"Long Lane Pasture: A community-run nature reserve in Finchley, North London.",
		description:
			"Long Lane Pasture is a wildlife and nature reserve in North London, maintained entirely by volunteers. This community green space offers a peaceful retreat within the city, providing a habitat for diverse wildlife, including birds, insects, and wildflowers. Preserved through local efforts, the pasture serves as a vital urban sanctuary, promoting conservation and education while fostering a connection to nature for visitors of all ages.",
		locale: "en_GB",
		type: "website",
		images: {
			url: "https://longlanepasture.org/assets/llpsquare.jpeg",
			alt: "View from the meadow at Long Lane Pasture",
		},
	},
	manifest: "/site.webmanifest",
	authors: [
		{
			name: "Open Source Contributors",
			url: "https://github.com/longlanepasture/longlanepasture.org",
		},
	],
};
export const viewport: Viewport = {
	themeColor: "white",
	width: "device-width",
	initialScale: 1,
	userScalable: true,
};

const organizationJsonLd: WithContext<Organization> = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Long Lane Pasture",
	alternateName: "LLP",
	url: "https://longlanepasture.org/",
	logo: "https://longlanepasture.org/assets/llpsquare.jpeg",
	sameAs: ["https://github.com/longlanepasture/longlanepasture.org"],
	address: {
		"@type": "PostalAddress",
		streetAddress: "Long Lane",
		addressLocality: "Finchley",
		addressRegion: "London",
		postalCode: "N3 2RN",
		addressCountry: "GB",
	},
	areaServed: {
		"@type": "Place",
		name: "Barnet, London",
	},
	nonprofitStatus: "https://schema.org/UKTrust",
};
const websiteJsonLd: WithContext<WebSite> = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	url: "https://longlanepasture.org/",
	name: "Long Lane Pasture",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactElement;
}) {
	const dd = (num: number): string => (num < 10 ? `0${num}` : num.toString());
	return (
		<html lang="en-GB">
			<head>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge, chrome=1" />
				<meta name="geo.region" content="GB" />
				<meta name="geo.placename" content="London Borough of Barnet" />
				<meta
					name="content_updated"
					content={((d = new Date()) =>
						[d.getFullYear(), dd(d.getMonth() + 1), dd(d.getDay())].join(
							"-",
						))()}
				/>
				<link
					rel="sitemap"
					type="application/xml"
					title="Sitemap"
					href="/sitemap.xml"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationJsonLd),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteJsonLd),
					}}
				/>
			</head>
			<body>
				<header>
					<h1>
						<NavigationLink to="home">Long Lane Pasture</NavigationLink>
					</h1>
					<nav>
						<a className="hamburger" href="#!">
							☰
						</a>
						<NavList filter="nav" />
					</nav>
				</header>
				<main>
					<ClosureNotice />
					{children}
					<footer>
						<NavList filter="footer" />
					</footer>
				</main>
				<CustomScriptLoader path="scripts" />
			</body>
		</html>
	);
}
