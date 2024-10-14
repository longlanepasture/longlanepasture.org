import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Pasture goes under cover",
	description:
		"An article about the Long Lane Pasture in 2015, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2015/2015Jul09.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/pasture-goes-under-cover.jpg",
				alt: "Barnet Mayor, Councillor Mark Shooter and the Lady Mayoress, Melissa Shooter at the Long Lane Pasture garden party. Photo Neil McNaughton",
			},
		],
	},
});

export default () => (
	<article id="pasture-goes-under-cover">
		<h2>Pasture goes under cover</h2>
		<p className="tagline">
			By Neil McNaughton. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2015/2015Jul09.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, July 2015
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/pasture-goes-under-cover.jpg"
				alt="Barnet Mayor, Councillor Mark Shooter and the Lady Mayoress, Melissa Shooter at the Long Lane Pasture garden party. Photo Neil McNaughton"
			/>
			<figcaption>
				Barnet Mayor, Councillor Mark Shooter and the Lady Mayoress, Melissa
				Shooter at the Long Lane Pasture garden party. Photo Neil McNaughton
			</figcaption>
		</figure>
		<p>
			<strong>
				Tucked away on the N2-N3 border where Long Lane, the North Circular Road
				and the Northern Line converge, in one of the borough's busiest corners,
				Long Lane pasture provides a welcome oasis for nature lovers, walkers
				and anyone who wants to get away from it all without having to travel
				too far. This open space has been here since 1912, but is so secluded
				that many local residents are not aware of its existence.
			</strong>
		</p>
		<p>
			On Sunday 14 June, members of the Pasture's 'Friends' group, volunteers
			and wellwishers gathered for a garden party to celebrate the construction
			of a new wooden gazebo and fencing made possible by a £5,000 grant from
			Barnet's area grant scheme.
		</p>
		<p>
			Former Barnet Mayor Brian Coleman, who was instrumental in obtaining the
			Pasture Trust's 25-year lease in 2009, was joined by current Mayor
			Councillor Mark Shooter and Lady Mayoress Melissa Shooter at the event.
		</p>
		<p>
			Local resident and custodian of the pasture Wayne Armsby proudly showed
			off the tree planting programme, designed to mask off noise from the North
			Circular, as well as the beehives, water features and protected nature
			reserves, all made possible by a small army of local volunteers.
		</p>
		<p>
			The new shelter will also be home to a collection of illustrations showing
			visitors what can be seen in its two and half acres of unspoilt landscape,
			including butterflies, birds, many species of trees, wild flowers and pond
			life.
		</p>
		<p>
			The pasture also regularly sees working visits from groups of young
			offenders, Duke of Edinburgh award students and local school pupils. It is
			also planned to use the new shelter or talks, working lunches and planning
			meetings, especially important given the uncertainty of the British
			climate!
		</p>
		<p>
			For information visit the website, www.longlanepasture.org and follow on
			Twitter <NavigationLink to="x">@LLPasture</NavigationLink>.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
