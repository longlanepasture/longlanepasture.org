import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Gate dispute puts volunteers at loggerheads",
	description:
		"Volunteers at Long Lane Pasture are locked in a dispute over access with their neighbours at Pointalls Allotments",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2020/2020Feb03.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/creatures-from-the-blue-lagoon.png",
				alt: "Gate dispute puts volunteers at loggerheads",
			},
		],
	},
});

export default () => (
	<article id="gate-dispute-puts-volunteers-at-loggerheads">
		<h2>Gate dispute puts volunteers at loggerheads</h2>
		<p className="tagline">
			By John Dearing. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2020/2020Feb03.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, February 2020
		</p>
		<p>
			<strong>
				Disagreements over the use of a gate connecting the allotments to the
				pasture arose between the Pointalls management board, who are themselves
				volunteers, and long-time pasture volunteers Wayne Armsby and his wife
				Elsie Price, whose Long Lane home backs on to the allotments. These led
				to the board taking back their allotment plot and terminating the gate
				licence.
			</strong>
		</p>
		<h3>No access to equipment</h3>
		<p>
			<img
				src="/assets/history/gate-dispute-puts-volunteers-at-loggerheads-1.png"
				alt="Flooding at Long Lane Pasture"
				className="float"
			/>
			In turn, this means the pasture team no longer have direct access to the
			tools and heavy equipment they use to maintain the two-acre site
			throughout the year. It has always been stored in a workshop behind Wayne
			and Elsie's house, close to the connecting gate.
		</p>
		<p>
			Pasture trust chair Donald Lyven and vice chair Harriet Copperman told
			supporters in a letter that their current lease with Barnet Council does
			not permit them to build any equipment storage on the pasture site itself.
			“The future of the Pasture could be in jeopardy if a solution is not found
			to this dreadful situation,” they said.
		</p>
		<p>
			Volunteer Linda Dolata told The Archer that the pasture is the source of
			several springs and has always had a problem with flooding. “We had this
			under control by pumping the worst of the water into the sewers but now we
			no longer have access to the power that we need to work the pump,” she
			said.
		</p>
		<h3>Response from Pointalls</h3>
		<p>
			Paul Hendrick, chair of the board of directors at Pointalls Allotments,
			said under their lease with Barnet Council only current plotholders were
			allowed to have gate licences, which no longer applied to Wayne and Elsie.
		</p>
		<p>
			<img
				src="/assets/history/gate-dispute-puts-volunteers-at-loggerheads-2.png"
				alt="Flooding at Long Lane Pasture"
				className="float"
			/>
			He said the issue of power for the water pump had not been raised directly
			with the board and questioned why equipment could not be moved from their
			workshop to the pasture's main entrance via Long Lane.
		</p>
		<p>
			He added: “I stress we have no argument with the pasture's trustees. They
			have written to us with an outline proposal for an alternative arrangement
			for access. Our response was that we had no objection in principle but we
			needed to see a detailed proposal which met their needs but at the same
			time did not compromise our site security and was at no cost to Pointalls.
			We are awaiting their response.”
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
