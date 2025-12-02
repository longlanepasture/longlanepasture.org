import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "New fence and new fox at Long Lane Pasture",
	description:
		"An article about the Long Lane Pasture in 2010, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://www.the-archer.co.uk/archive/2010/2010Feb07.pdf",
	},
});

export default () => (
	<article id="new-fence-and-new-fox-at-long-lane-pasture">
		<h2>New fence and new fox at Long Lane Pasture</h2>
		<p className="tagline">
			As published on{" "}
			<a
				href="https://www.the-archer.co.uk/archive/2010/2010Feb07.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, February 2010
		</p>
		<p>
			<strong>
				The Friends of Long Lane Pasture are reporting great progress on a
				number of major projects and the arrival of even more wildlife.
			</strong>
		</p>
		<p>
			Firstly, the dilapidated footpath fence alongside the pasture has been
			replaced with a new 100-metre fence, which is strong and secure and
			provides a second gate onto the pasture at the railway bridge end. The
			fence was purchased with the aid of a grant from the City Bridge Trust.
		</p>
		<p>
			This new gate leads on to an area at the top of the embankment with a
			splendid view over Finchley and there are plans to provide a vista sign
			here pointing out local landmarks.
		</p>
		<p>
			The existing hard-standing path at the Long Lane end of the Pasture has
			been resurfaced, making it much smoother and easier for pushchairs and
			wheelchairs.
		</p>
		<h3>Bluebells and birdfeeders</h3>
		<p>
			One thousand native English bluebells have been planted next to the main
			entrance gate near the Fire Station. During the planting, an old horse
			harness was unearthed, a relic from days when horses and ponies grazed on
			the land.
		</p>
		<p>
			The pasture had its annual mow, with the cut grass piles providing a good
			habitat for many creatures, including small mammals. Resident fox Foxy Boy
			is no longer around but another very shy fox with a distinguishing pale
			tail may have taken over his territory.
		</p>
		<p>
			Many visitors have seen a heron in or next to the large pond. Lots of
			goldfinches have feasted on the teasel seeds and a bird feeding station
			has been set up, which is proving very popular with blue tits and robins.
		</p>
		<h3>Helpers welcome</h3>
		<p>
			Poor weather has forced the trustees to close the pasture to visitors
			until March. Work parties, however, will continue to take place on
			Saturday mornings from 10am to 12 noon and more helpers of any age and
			ability (with waterproof footwear) are very welcome.
		</p>
		<p>
			<i>
				For more information, including a photo gallery of the pasture through
				the seasons, visit www.longlanepasture.org.
			</i>
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
