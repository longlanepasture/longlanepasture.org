import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Time for tree planting",
	description:
		"An article about the Long Lane Pasture, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2025/2025Feb03.pdf",
	},
});

export default () => (
	<article id="time-for-tree-planting">
		<h2>Time for tree planting</h2>
		<p className="tagline">
			By Donald Lyven. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2025/2025Feb03.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, Feb 2025
		</p>
		<p>
			<strong>
				Those fortunate to have obtained a Long Lane Pasture Calendar for 2025
				will see that February's picture is of Wayne Armsby, the man mainly
				responsible for saving the Pasture from development, when it was brought
				under the control of a trust in 2005.
			</strong>
		</p>
		<p>
			Wayne was one of the volunteers who turned out regularly to help turn the
			bramble-infested, rubbish-strewn site, opposite the fire station in Long
			Lane, N3, into the welcoming and award-winning green space it has become.
			Sadly, Wayne died at this time last year, but his commitment for the
			environment lives on. Wayne often said: "The best time to have planted a
			tree was 20 years ago; the next best time is today!" Wayne was in it for
			the long haul.
		</p>
		<p>
			The weeping willow he planted that day is still growing strong, with its
			double trunk making it very distinctive, and proving that planting a tree
			at any time is a great way to safeguard the future of our environment.
		</p>
		<p>
			This year, Wayne's widow Elsie, plans to plant a silver birch on the
			Pasture in Wayne's memory for future generations to enjoy.
		</p>
		<figure className="feature-image">
			<img
				src="/assets/stories/wayne-armsby-planting-a-young-tree-on-long-lane-pasture.png"
				alt="Wayne Armsby planting a young tree on Long Lane Pasture"
			/>
			<figcaption>
				Nature lover: Wayne Armsby planting a young tree on Long Lane Pasture in
				2005. Photo Donald Lyven
			</figcaption>
		</figure>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
