import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Long Lane Pasture",
	description:
		"An article about the Long Lane Pasture in 2007, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://www.the-archer.co.uk/archive/2007/2007Mar04.pdf",
	},
});

export default () => (
	<article id="long-lane-pasture">
		<h2>Long Lane Pasture</h2>
		<p className="tagline">
			As published on{" "}
			<a
				href="https://www.the-archer.co.uk/archive/2007/2007Mar04.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, March 2007
		</p>
		<p>
			<strong>
				A piece of old Finchley, tucked away on the N3 side of the North
				Circular and recently under threat from developers, may soon become a
				wildlife site to be enjoyed by the community.
			</strong>
		</p>
		<p>
			This is the plan of the Long Lane Pasture Trust, who hope to sign a lease
			for the land in the near future. However, they do still need to raise
			£1,100, plus stamp duty, and would be very grateful for any financial
			contribution. Cheques, made payable to Long Lane Pasture Trust, should be
			sent to the treasurer at 256 Long Lane, N3 3SN.
		</p>
		<p>
			Practical assistance would be welcome too. Anyone feeling like a bit of
			work in the fresh air can join them on alternate Saturday mornings,
			between 10am and noon. Next work dates are 10 and 24 March.
		</p>
		<p>
			For further information, please contact The Finchley Society's Derek
			Warren on [REDACTED].
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
