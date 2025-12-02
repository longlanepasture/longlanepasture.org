import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Early birds deliver a delightful earful at dawn",
	description:
		"An article about the Long Lane Pasture in 2017, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://www.the-archer.co.uk/archive/2017/2017June12.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/early-birds-deliver-a-delightful-earful-at-dawn-magpies.jpg",
				alt: "Flight of magpies: Just some of the dawn chorus birds at Long Lane Pasture. Photo Donald Lyven",
			},
		],
	},
});

export default () => (
	<article id="early-birds-deliver-a-delightful-earful-at-dawn">
		<h2>Early birds deliver a delightful earful at dawn</h2>
		<p className="tagline">
			By Linda Dolata. As published on{" "}
			<a
				href="https://www.the-archer.co.uk/archive/2017/2017June12.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, June 2017
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/early-birds-deliver-a-delightful-earful-at-dawn-magpies.jpg"
				alt="Flight of magpies: Just some of the dawn chorus birds at Long Lane Pasture. Photo Donald Lyven"
			/>
			<figcaption>
				Flight of magpies: Just some of the dawn chorus birds at Long Lane
				Pasture. Photo Donald Lyven
			</figcaption>
		</figure>
		<p>
			<strong>
				I suspect I am in the minority in thinking that 4.45am is the best time
				of the day, but even so we had an excellent turn out for the dawn chorus
				event at Long Lane Pasture on the last Sunday in April.
			</strong>
		</p>
		<p>
			In the past we have walked around in a group, but this time everyone
			seemed to find a favourite bench or tree to wait quietly for the birds to
			do their thing, and for the sun to rise
		</p>
		<p>
			The blackbirds as ever were in full-throated song, each declaring its
			territory loudly and tunefully. A song thrush with its repetitive but
			so-pleasing melody carolled from the top of one of the poplars lining the
			North Circular, and even included facsimile police sirens in its
			repertoire. Somehow they sound much nicer when the thrush is the source of
			the sound.
		</p>
		<h3>Tuneful and harsh</h3>
		<p>
			The blackbird, thrush, robin, wren and blackcap all have wonderful songs,
			which everybody should do their best to hear at this time of the year...
			and all do still sing during the day, not just at dawn to welcome the
			sunrise.
		</p>

		<figure className="feature-image">
			<img
				src="/assets/history/early-birds-deliver-a-delightful-earful-at-dawn-robin.jpg"
				alt="Marking his territory: Robin in blossom at Long Lane Pasture. Photo Donald Lyven"
			/>
			<figcaption>
				Marking his territory: Robin in blossom at Long Lane Pasture. Photo
				Donald Lyven
			</figcaption>
		</figure>
		<p>
			Close to where the song thrush perched on high, a pair of crows tend the
			nest that we watched them construct last year. Other recognisable arias
			came from a pair of competing blackcaps, then minute wrens who have such
			loud brave voices for such a tiny bird.
		</p>
		<p>
			As the time passed, other less tuneful calls were included in the chorus:
			the crows and their cousins the magpies were in evidence as was a single
			jay with its harsh call. A total of seven mallards went over, no doubt a
			female being pursued by several potential suitors, then a pair of honking
			Canada geese.
		</p>
		<h3>Flying lollipop</h3>
		<p>
			A good range of tits, bluetit, great tit, coal tit, and finally a single
			long-tailed tit were all heard and then seen. It is rare to see the
			beautiful little 'flying lollipop' of a long-tailed tit on its own, but
			this one was so busy collecting insect larvae that it obviously had
			nestlings to feed. We know they have bred on the pasture in the past, as
			last year their tiny neat round nest was spotted, concealed in the
			brambles.
		</p>
		<p>
			The resident moorhen was there too, while starlings, sparrows and pigeons
			haunted the bird feeders and overhead were seen an elegant seagull, wood
			pigeons, and doubtless other eathered vertebrates not listed.
		</p>
		<p>
			We are very lucky in being next to both the railway line and allotments,
			which more than doubles the area for the birds to inhabit.
		</p>
		<p>
			<i>
				For anybody who has yet to visit the pasture, it is open every day at
				this time of the year, located on Long Lane, opposite the fire station.
				To know more, pop in on a Saturday morning or look for our stall at East
				Finchley Festival this month.
			</i>
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
