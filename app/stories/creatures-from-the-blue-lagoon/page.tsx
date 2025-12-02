import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Creatures from the blue lagoon",
	description:
		"Long Lane Pasture's first event of the year was a Pond Life day on 16 April.",
	alternates: {
		canonical: "https://the-archer.co.uk/archive/2011/2011Jun11.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/creatures-from-the-blue-lagoon.png",
				alt: "Creatures from the blue lagoon",
			},
		],
	},
});

export default () => (
	<article id="creatures-from-the-blue-lagoon">
		<h2>Creatures from the blue lagoon</h2>
		<p className="tagline">
			By John Dearing. As published on{" "}
			<a
				href="https://the-archer.co.uk/archive/2011/2011Jun11.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, June 2011
		</p>
		<p>
			<strong>
				Long Lane Pasture's first event of the year was a Pond Life day on 16
				April. It was a bright, clear morning and there was a good turnout of
				people of all ages who came to enjoy the pasture and some of its flora
				and fauna. On hand to present some of the amphibian inhabitants was a
				personable young man called Joshua.
			</strong>
		</p>
		<p>
			<img
				src="/assets/history/creatures-from-the-blue-lagoon.png"
				alt="Creatures from the blue lagoon"
			/>
		</p>
		<p>
			Some of the visitors had fun by naming the stars of the show, so we met
			Justin the Frog, Thomas the Toad and Sydney the Slow Worm (who,
			incidentally is neither a worm nor a snake, but is a legless lizard) plus
			quite a number of newts and tadpoles.
		</p>
		<p>
			Those of a more reflective nature could enjoy the view from the seat at
			the top of the bank, or gaze into the water of the pond made blue by the
			sky.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
