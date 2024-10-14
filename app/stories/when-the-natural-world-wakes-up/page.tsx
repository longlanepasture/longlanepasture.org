import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "When the natural world wakes up",
	description:
		"An article about the Long Lane Pasture in 2024, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2010/2010Oct09.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/when-the-natural-world-wakes-up.jpg",
				alt: "Morning has broken: A wren sings in the early dawn light on Long Lane Pasture. Photo Donald Lyven",
			},
		],
	},
});

export default () => (
	<article>
		<h2>When the natural world wakes up</h2>
		<p className="tagline">
			By Donald Lyven. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2010/2010Oct09.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, July 2024
		</p>

		<figure className="feature-image">
			<img
				src="/assets/history/when-the-natural-world-wakes-up.jpg"
				alt="Morning has broken: A wren sings in the early dawn light on Long Lane Pasture. Photo Donald Lyven"
			/>
			<figcaption>
				Morning has broken: A wren sings in the early dawn light on Long Lane
				Pasture. Photo Donald Lyven
			</figcaption>
		</figure>
		<p>
			<strong>
				International Dawn Chorus Day fell on Sunday 5 May and a group of brave
				souls got themselves to Long Lane Pasture before sunrise to be greeted
				by the pleasing symphony of birdsong, with the bonus of seeing a few
				bats flitting about despite the temperature being 7°C.
			</strong>
		</p>
		<p>
			The brightest stars were fading in the clear and lightening sky as a
			discernible mist hung low over the dew-laced meadow. All the usual
			suspects were calling: robin, blackbird, song thrush, blackcap, chiff
			chaff and great tit, but the wren as always, despite its diminutive size,
			was the loudest and most dominant in the morning soundscape.
		</p>
		<p>
			Seen silhouetted crossing the sky were magpies, pigeons, carrion crows and
			gulls, flying over with a purpose only they knew. In the east, the
			evolving hues of yellows and pinks blazed in anticipation of the sun's
			rising. The blanket of mist began lifting as the first glimpse of the
			sun's orange disk came into view.
		</p>
		<p>
			The lighter it became the less the birds were calling, but new sounds
			caught my ear: the song of the garden warbler, the tuneful notes of the
			ever-present goldfinches, and the unmistakeable chirping of house
			sparrows; late to the party but welcome nonetheless.
		</p>
		<p>
			It had been a cold, early start at the pasture, opposite the fire station
			on Long Lane, N3, but the clarity of the dawn chorus before the cacophony
			of traffic began and the privilege of seeing the colourful sunrise on a
			new day made the effort worthwhile.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
