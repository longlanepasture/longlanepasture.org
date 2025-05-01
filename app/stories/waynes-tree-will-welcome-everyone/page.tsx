import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Wayne's tree will welcome everyone",
	description:
		"An article about the Long Lane Pasture in 2025, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2025/2025May06.pdf",
	},
});

export default () => (
	<article id="waynes-tree-will-welcome-everyone">
		<h2>Wayne's tree will welcome everyone</h2>
		<p className="tagline">
			By John Lawrence. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2025/2025May06.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, May 2025
		</p>
		<p>
			<strong>
				Volunteers at Long Lane Pasture have planted a tree in memory of their
				longtime friend and pasture stalwart Wayne Armsby, who died in 2024. The
				striking silver birch stands near the entrance to the nature reserve,
				welcoming visitors as they come through the gates.
			</strong>
		</p>
		<figure className="feature-image">
			<img
				src="/assets/stories/waynes-tree-will-welcome-everyone.png"
				alt="Stand sentinel: Volunteers plant the silver birch in honour of their friend Wayne Armsby, with his wife Elsie second from the right. Photo John Lawrence"
				loading="lazy"
			/>
			<figcaption>
				Stand sentinel: Volunteers plant the silver birch in honour of their
				friend Wayne Armsby, with his wife Elsie second from the right. Photo
				John Lawrence
			</figcaption>
		</figure>

		<p>
			Wayne was instrumental in saving the rough pasture from development more
			than 25 years ago and went on to become the group's treasurer as well as
			working on the land to transform it into the beautiful wildlife haven that
			it is today. His friends and fellow volunteers gathered on Saturday 12
			April to place the tall sapling in the ground with forget-me-nots around
			its base. Pasture volunteer Donald Lyven paid tribute saying: "Wayne was a
			man who believed in planting trees and he planted many here."
		</p>
		<p>
			Wayne's wife Elsie Price-Armsby said: "When we knew he was dying, Wayne
			chose a silver birch. It was one of his favourite trees, a very resilient
			ancient native species. I'm glad we've got such a lovely spot for it to
			welcome people into the pasture." Long Lane Pasture is now open every day
			from 9am to 7pm or dusk. Volunteers meet every Saturday from 10am to noon
			to keep the site looking good. They thanked readers of The Archer and
			everyone who contributed to a recent fundraising drive, helping them to
			buy essential new gardening equipment and secure units to store it on
			site.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
