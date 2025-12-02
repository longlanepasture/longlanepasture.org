import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "The future for Long Lane Pasture?",
	description:
		"An article about the beginning of the Long Lane Pasture restoration project in 2005, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://www.the-archer.co.uk/archive/2005/2005Jun03.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/the-future-for-long-lane-pasture-2005.jpg",
				alt: "Looking northbound over the land. Photo by Erini Rodis",
			},
		],
	},
});

export default () => (
	<article id="the-future-for-long-lane-pasture">
		<h2>The future for Long Lane Pasture?</h2>
		<p className="tagline">
			By John Lawrence. As published on{" "}
			<a
				href="https://www.the-archer.co.uk/archive/2005/2005Jun03.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, June 2005
		</p>
		<p>
			<strong>
				A vision for the future of a long-neglected open space could see it
				turned into a wildlife haven for the enjoyment of local people.
			</strong>
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/the-future-for-long-lane-pasture-2005.jpg"
				alt="Looking northbound over the land. Photo by Erini Rodis"
				loading="lazy"
			/>
			<figcaption>
				Looking northbound over the land. Photo by Erini Rodis
			</figcaption>
		</figure>
		<p>
			Long Lane Pasture, which occupies a two-hectare site just north of the
			North Circular Road, could become a true green space once again and
			reopened to the public.
		</p>
		<p>
			The site is currently overrun by brambles and rough grass but is kept in
			some order by volunteers from the Long Lane Pasture Action Group.
		</p>
		<p>
			The same group is seeking to gain a 99-year lease for the land from Barnet
			Council and has already engaged the services of internationally renowned
			wildlife landscape designer Julie Toll to shape its ambitious plans.
		</p>
		<p>
			Julie was praised for her work in designing a wildlife garden in the
			grounds of 10 Downing Street.
		</p>
		<p>
			Her plans for the pasture include creating a pond and a border of plants
			to attract butterflies. There would be seating areas and level paths for
			exploring, although the aim would be to keep it as close to nature as
			possible.
		</p>
		<h4>A forgotten resource</h4>
		<p>
			A public meeting was held on 28 April at the Sea Cadets Hall in Long Lane
			to present the site plans to residents and around 35 people attended. Many
			fully supported the proposal although some expressed concerns about
			security should the pasture be opened to the public.
		</p>
		<p>
			Group spokesperson Ann Brown said she was 80% confident of gaining a lease
			on the land although there were still a lot of hoops to go through.
		</p>
		<p>
			She said, “It would be wonderful if we could restore this land to public
			use again. We would like to see people return here to fly kites or to have
			picnics. It's a lovely local resource which has been forgotten for oo
			long.”
		</p>
		<p>
			Barnet Council has indicated that it is prepared to hand over the site to
			the voluntary group but a final decision is not expected to be made until
			later this year at the earliest.
		</p>
		<p>
			The action group is calling on Finchley residents to show their support
			for the wildlife plan by registering as a friend of the pasture. This can
			be done by contacting Ann Brown on [REDACTED].
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
