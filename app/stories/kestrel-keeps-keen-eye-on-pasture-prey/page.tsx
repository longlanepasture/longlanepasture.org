import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Kestrel keeps keen eye on pasture prey",
	description:
		"An article about the Long Lane Pasture in 2017, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2017/2017Oct03.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/kestrel-keeps-keen-eye-on-pasture-prey.jpg",
				alt: "Let us prey: The kestrel on the hunt in Long Lane Pasture. Photo Donald Lyven.",
			},
		],
	},
});

export default () => (
	<article id="kestrel-keeps-keen-eye-on-pasture-prey">
		<h2>Kestrel keeps keen eye on pasture prey</h2>
		<p className="tagline">
			As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2017/2017Oct03.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, October 2017
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/kestrel-keeps-keen-eye-on-pasture-prey.jpg"
				alt="Let us prey: The kestrel on the hunt in Long Lane Pasture. Photo Donald Lyven."
			/>
			<figcaption>
				Let us prey: The kestrel on the hunt in Long Lane Pasture. Photo Donald
				Lyven.
			</figcaption>
		</figure>
		<p>
			<strong>
				Many thanks to photographer Donald Lyven for this fabulous picture of a
				majestic kestrel on the hunt in Long Lane Pasture at the top end of East
				Finchley.
			</strong>
		</p>
		<p>
			The presence of the bird of prey is testament to the regeneration of
			nature and wildlife in this 2.6-acre green oasis since it was put under
			the loving care of volunteers 12 years ago. The pasture, opposite the fire
			station on Long Lane, is open every day from 10am to dusk and you can find
			special events at www.longlanepasture.org.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
