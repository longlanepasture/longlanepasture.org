import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Long wait is over for Long Lane Pasture",
	description:
		"An article about the opening of Long Lane Pasture in 2009, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://www.the-archer.co.uk/archive/2009/2009AugArcher.pdf",
	},
});

export default () => (
	<article id="long-wait-is-over-for-long-lane-pasture">
		<h2>Long wait is over for Long Lane Pasture</h2>
		<p className="tagline">
			By Diana Cormack. As published on{" "}
			<a
				href="https://www.the-archer.co.uk/archive/2009/2009AugArcher.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, August 2009
		</p>
		<p>
			<strong>
				The official opening of Long Lane Pasture took place in such beautiful
				weather it seemed that nature itself approved of this long awaited day.
			</strong>
		</p>
		<p>
			For the last 11 years volunteers have struggled to keep the place open for
			people to enjoy. Barnet Council purchased the Pasture in 1912 and the
			public used it until the 1980s, when proposed construction work on the
			North Circular Road jeopardised its future. A campaign to stop the council
			selling the land for housing led to the creation of the Long Lane Pasture
			Action Group in 1998. Since 2004, with help from the Big Lottery Fund and
			local donations, the group has worked hard to prepare the overgrown site
			for the community to visit.
		</p>
		<h4>Peppercorn Pasture</h4>
		<p>
			Now they have succeeded in obtaining a 25-year lease from Barnet Council
			at a peppercorn rent. Ann Brown, chairwoman of the Trust, presented the
			Mayor of Barnet Brian Coleman with 25 symbolic peppercorns when he
			performed the opening ceremony on 19 June. In her speech she thanked the
			mayor for his long and valued support of the scheme, which he described as
			“a dream come true”.
		</p>
		<p>
			his remnant of historic Finchley Common is now a wildlife refuge. Its
			ponds attract native amphibians, birds and dragonflies whilst a variety of
			wild lowers, brambles and bushes sustain bees, butterflies and other
			insects. There are bird feeding stations, an easy walking grassland trail
			plus a hard standing path and seating area.
		</p>
		<p>
			Access to the area, which is bordered by the Northern line and the North
			Circular Road, is by a footpath on Long Lane opposite the ire station. The
			Pasture is open to the public between 10am and 5pm on Saturdays and
			Sundays (no dogs, please) and there is a regular programme of events.
			Groups, particularly schools and youth groups, are welcome by arrangement.
			Volunteer work is on Saturdays at 10am. If you wish to join in, make a
			donation or need more information call [REDACTED].
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
