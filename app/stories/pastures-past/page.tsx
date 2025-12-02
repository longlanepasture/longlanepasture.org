import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Pasture's past",
	description:
		"An article about the Long Lane Pasture in 2012, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://the-archer.co.uk/archive/2012/2012Jul04.pdf",
	},
});

export default () => (
	<article id="pastures-past">
		<h2>Pasture's past</h2>
		<p className="tagline">
			By Linda Dolata. As published on{" "}
			<a
				href="https://the-archer.co.uk/archive/2012/2012Jul04.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, July 2012
		</p>
		<p>
			<strong>
				Many of you already know about the Long Lane Pasture nature reserve, but
				for anyone who has never seen it now is as good a time as any. Situated
				behind the houses opposite the fire station on Long Lane is a relict hay
				meadow from the days when fodder was grown for London's horses.
			</strong>
		</p>
		<p>
			It is at its very best right now, and only needs a smidgeon of sunshine to
			bring out all the native butterflies, bees, hover flies, grasshoppers and
			beetles that breed there.
		</p>
		<h3>Flower spotters</h3>
		<p>
			As it is the pasture's centenary year, archive research has been done. It
			substantiated links with Octavia Hill, of National Trust fame, and
			discovered a list of wild flowers collected by children from the local
			primary school on Squires Lane back in 1920. It makes lovely reading. In a
			few short weeks, 57 species were gathered as they flowered, from local
			lanes, fields, hedges, banks and ditches which the children passed on
			their walk to school.
		</p>
		<p>
			The pupils who did this were named. Maybe someone reading this is a
			descendant of Kitty Saunders, Fred Barker, Doris Wright, Doreen Mellor,
			George Stanford, Eva Robinson, Harry Pike, D.Embleton, Stanley Sharpe,
			Mabel Sag, Nellie Selves, Lily Beadle, Sybil Cook, Irene Spear, or Gladys
			Cul?
		</p>
		<p>
			We checked the plant species and do still have most of them, with
			beautiful old country names like honesty, creeping cinquefoil, knapweed,
			primroses, cowslips, Queen Anne's Lace, mouse-eared chickweed, goosegrass,
			tormentil, honeysuckle, speedwell, woody nightshade, jack-by-the-hedge,
			heartsease, goatsbeard and ladies smock. A hundred years ago the children
			would probably have known many of the names as a matter of course. The
			only plant that we have lost from their 1920 list is the early orchid, so
			we are doing a good job.
		</p>
		<h3>Centenary competition</h3>
		<p>
			Please take the time to come and see this fragment of our area as it would
			have appeared in their time. Even better, bring your camera or your paint
			box and enter our centenary Photo and Art Competition, which will be
			judged in October, and the best entries displayed at artsdepot, North
			Finchley. Entries must be of the Pasture in 2012, but could be drawings,
			paintings or photos of anything seen there.
		</p>
		<p>
			Long Lane Pasture is always open at weekends from 10am until 5pm, and
			entries can be handed in on Saturdays between 10am and noon. Full details
			from www.longlanepasture.org/centenary. We hope to see you there.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
