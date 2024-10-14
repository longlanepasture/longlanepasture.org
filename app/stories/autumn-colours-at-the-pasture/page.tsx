import type { Metadata } from "next";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata: Metadata = {
	title: "Autumn colours at the Pasture",
	description:
		"An article about the Long Lane Pasture in 2010, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2010/2010Oct09.pdf",
	},
};

export default () => (
	<article>
		<h2>Autumn colours at the Pasture</h2>
		<p className="tagline">
			By Linda Dolata. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2010/2010Oct09.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			. October 2010
		</p>
		<p>
			<strong>
				It has been an eventful summer at Long Lane Pasture, with several
				successful organised events, such as Wildflower Day and Butterfly Day.
				There have also been a couple of school visits; it's a great way for
				children to connect with their environment, in a restful and lovely
				place.
			</strong>
		</p>
		<p>
			Meanwhile, each weekend brings a trickle of visitors, making good use of
			the meadow, a small haven of ancient hay meadow on our doorstep, with
			several ponds and a good range of habitats. Especially popular have been
			the blackberries, descendants of wartime allotment cultivars
		</p>
		<h3>Glowing colours</h3>
		<p>
			Recent wildlife sightings have included slow-worms, voles, toads and
			frogs, and of course the exciting wasp spiders, so aptly named with their
			bright warning colouration. There will soon be other colours to enjoy in
			the leaves. Delicate golden birch hues, the toffee brown and ripening
			acorns of deciduous oak, lovely russets and crimsons all herald the new
			season.
		</p>
		<p>
			Look out for the 'Guelder rose', not a rose at all, but a species of
			Viburnum, and for the sparse but beautiful Spindle fruits, an impossible
			combination of candyfloss pink and orange, which somehow looks lovely
		</p>
		<h3>Fascinating fungi</h3>
		<p>
			Also not to be missed are the huge fruiting bodies of some of the fungi
			that spend most of the year under the soil as microscopic mycelia of
			hyphae (masses of tiny white threads). This year there are some splendid
			large examples as well as a whole range of smaller species.
		</p>
		<p>
			I would urge anybody who has not seen the Pastures to come along one
			Saturday or Sunday, and have a look. If you pop in between 10am and 12noon
			on a Saturday, when the volunteers are around, we can show you where to
			look for the wasp spiders, for example.
		</p>
		<p>
			Anybody can come along and help. There is also an unusual job for somebody
			special: going out in a canoe to clear the large pond of the ubiquitous
			pondweed, which threatens to choke it.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
