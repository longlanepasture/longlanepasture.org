import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "SmartCo: Long Lane Pastures Community Project",
	description:
		"An article about the Long Lane Pasture in 2007, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://smart-co.co.uk/long-lane-pastures-community-project/",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/stories/smartco-2024-11.png",
				alt: "The SmartCo team at Long Lane Pastures",
			},
		],
	},
});

export default () => (
	<article id="smartco">
		<h2>Long Lane Pastures Community Project (SmartCo)</h2>
		<p className="tagline">
			By Hannah Granshaw. As published on{" "}
			<a
				href="https://smart-co.co.uk/long-lane-pastures-community-project/"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article on SmartCo's website"
			>
				SmartCo's website
			</a>
			, 28 November 2024
		</p>
		<p>
			<strong>
				The SmartCo team recently had the pleasure of spending a rewarding day
				at Long Lane Pastures, a beautiful community garden in North London.
				Embracing the crisp Autumn sunshine, we rolled up our sleeves to make a
				meaningful difference.
			</strong>
		</p>
		<p className="center">
			<img
				src="/assets/stories/smartco-2024-11.png"
				alt="The SmartCo team at Long Lane Pastures"
			/>
		</p>
		<p>
			Together, we cleared 18 barrowloads of foliage from the pond and tackled
			overgrown weeds, brambles and scrub in the Octavia Hill area, helping
			prepare the space for snowdrops to flourish and ensuring the pasture
			remains a vibrant haven for both nature and the local community.
		</p>
		<p>
			Donald, the chairman of Long Lane Pastures, expressed his gratitude,
			saying:
		</p>
		<h3>
			<blockquote>
				<i>
					'Many thanks to the staff at SmartCo Consulting. You have made a real
					difference.'
				</i>
			</blockquote>
		</h3>
		<p>
			Beyond the physical work, the day also served as a reminder of the
			importance of connecting with nature and nurturing our mental well-being.
			At SmartCo, we're deeply committed to fostering mental health, not just in
			our teams but also in the communities we serve. Initiatives like these not
			only strengthen our bonds as colleagues but also provide a moment of
			reflection, grounding and growth.
		</p>
		<p>
			<strong>
				A huge thank you to everyone who participated, for your hard work,
				teamwork and positive energy, making the day such a success.
			</strong>
		</p>
		<p>
			If you'd like to discuss how SmartCo can support you in the community,{" "}
			<a href="https://smart-co.co.uk/contact/" rel="noopener" target="_blank">
				please contact us today.
			</a>
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
