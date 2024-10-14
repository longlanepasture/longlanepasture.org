import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Scouts hunt small critters on mini safari",
	description:
		"An article about the Long Lane Pasture in 2022, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2022/2022June12.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/scouts-hunt-small-critters-on-mini-safari-cubs.jpg",
				alt: "Ground level: Cub scouts explore Long Lane Pasture in extreme close-up",
			},
			{
				url: "https://longlanepasture.org/assets/history/scouts-hunt-small-critters-on-mini-safari-pond.jpg",
				alt: "Pond life: Young Cubs enjoying the wildlife haven",
			},
		],
	},
});

export default () => (
	<article id="scouts-hunt-small-critters-on-mini-safari">
		<h2>Scouts hunt small critters on mini safari</h2>
		<p className="tagline">
			By Joshua Thomas, 1st Finchley Scout Group. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2022/2022June12.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, June 2022
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/scouts-hunt-small-critters-on-mini-safari-cubs.jpg"
				alt="Ground level: Cub scouts explore Long Lane Pasture in extreme close-up"
			/>
			<figcaption>
				Ground level: Cub scouts explore Long Lane Pasture in extreme close-up
			</figcaption>
		</figure>
		<p>
			<strong>
				In a break from our usual meetings at the scout hut, 1st Finchley
				Beavers, Cubs and Scouts spent a spring evening at Long Lane Pasture,
				our local green space, tucked away off the main road.
			</strong>
		</p>
		<p>
			The Cubs were kept busy with their own bughunting kits, scooping up all
			sorts of different snails, slugs and insects. They replicated the insects'
			natural environments inside the jars whilst they peered through magnifying
			glasses.
		</p>
		<p>
			With thanks to Maureen Delandro of the Pasture committee, a tank of
			tadpoles and a large frog were also of great interest. At the end
			everything was returned to where we found it.
		</p>
		<p>
			The Scout meeting was occupied by a game. In small groups they were
			challenged to find a collection of symbols across the pasture,
			corresponding to a colour on the map. This sent them looking in every
			corner as they raced against the other teams.
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/scouts-hunt-small-critters-on-mini-safari-pond.jpg"
				alt="Pond life: Young Cubs enjoying the wildlife haven"
			/>
			<figcaption>Pond life: Young Cubs enjoying the wildlife haven</figcaption>
		</figure>
		<p>
			It was great to be outside on a warm evening. I wonder how many others
			know about this hidden pocket of greenery, just opposite the fire station
			on Long Lane, N3.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
