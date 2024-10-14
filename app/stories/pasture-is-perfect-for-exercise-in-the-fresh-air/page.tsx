import { mergeMetadata } from "../../../lib/helpers";
import { ContactUsLink } from "../../components/ContactUsLink";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Pasture is perfect for exercise in the fresh air",
	description:
		"An article about the Long Lane Pasture in 2020, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2020/2020Nov12.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/pasture-is-perfect-for-exercise-in-the-fresh-air.jpg",
				alt: "Team work: The Good Gym volunteers were regular volunteers at Long Lane Pasture this year. It remains open to visitors on Saturdays and most Sundays through the winter. Photo Donald Lyven.",
			},
		],
	},
});

export default () => (
	<article id="pasture-is-perfect-for-exercise-in-the-fresh-air">
		<h2>Pasture is perfect for exercise in the fresh air</h2>
		<p className="tagline">
			By Linda Dolata. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2020/2020Nov12.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, November 2020
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/pasture-is-perfect-for-exercise-in-the-fresh-air.jpg"
				alt="Team work: The Good Gym volunteers were regular volunteers at Long Lane Pasture this year. It remains open to visitors on Saturdays and most Sundays through the winter. Photo Donald Lyven."
			/>
			<figcaption>
				Team work: The Good Gym volunteers were regular volunteers at Long Lane
				Pasture this year. It remains open to visitors on Saturdays and most
				Sundays through the winter. Photo Donald Lyven.
			</figcaption>
		</figure>
		<p>
			<strong>
				This has been a strange year, and many of you will have become aware of
				all the benefits of being outside and taking in the wonder of the
				natural environment around us.
			</strong>
		</p>
		<p>
			This has become very apparent at Long Lane Pasture, opposite Finchley Fire
			Station, where we have had a large numbers of visitors, far more than ever
			before. Young families especially have dropped in, but also a wide range
			of people who just want somewhere calm, quiet and pleasant to relax.
		</p>
		<p>
			The pasture, with its unmanicured copses and meadows, reed-fringed ponds
			and constant birdsong, butterflies and bees, and of course our famous
			blackberries in August, has so much to offer, and we have been absolutely
			delighted to see so many new faces.
		</p>
		<p>
			A refrain we heard again and again was that visitors had no idea that such
			a beautiful place existed minutes away from their homes.
		</p>
		<h3>Maintaining the balance</h3>
		<p>
			All this, however, needs some maintenance to prevent it being overwhelmed
			by the thuggish brambles and hops, thistles and nettles and vigorous
			sallows, ashes, and prunus, at the expense of the subtler meadow flowers,
			shyer grasses, ferns and slow-growing trees.
		</p>
		<p>
			This constant balance is achieved by a tiny number of volunteers, and
			sadly we are mostly well over 60 (apologies, Ollie and young Seb), and
			find some of the physical work too demanding. Many visitors expressed an
			interest in helping and it is now, at this time of year, that much of the
			cutting, reaping, and stacking of vegetation has to be done.
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/floral-glory.jpg"
				alt="Floral glory: This snakeshead plant is just one of the beautiful inhabitants of the pasture"
			/>
			<figcaption>
				Floral glory: This snakeshead plant is just one of the beautiful
				inhabitants of the pasture
			</figcaption>
		</figure>
		<p>
			So forget the gym and boring repetitive exercises, please consider joining
			us, and benefiting your own physical and mental health at the same time.
			In present circumstances, it's best to bring your own gloves and secateurs
			or loppers. We meet at the pasture every Saturday morning from 10am to 12
			noon.
		</p>
		<p>
			Long Lane Pasture entrance is located alongside the North Circular Road,
			off the pathway that starts on the opposite side of Long Lane to the fire
			station. We would love to see you, you would be most welcome. If you have
			any questions, please <ContactUsLink />.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
