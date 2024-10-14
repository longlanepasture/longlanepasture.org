import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Lucky 13 for Pasture",
	description:
		"An article about girl guides visit to Long Lane Pasture.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2011/2011Aug08.pdf",
	},
});

export default () => (
	<article id="long-wait-is-over-for-long-lane-pasture">
		<h2>Lucky 13 for Pasture</h2>
		<p className="tagline">
			By Maureen Delandro. As published on{" "}
			<a
				href="http://www.the-archer.co.uk/archive/2011/2011Aug08.pdf"
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
				The number 13 was lucky for Long Lane Pasture in June, as that was the
				number of girl guides who visited one evening as part of their annual
				service to the community.
			</strong>
		</p>
		<p>
			The girls' activities were co-ordinated by guide leaders Toni, Kristy and
			Andrea. Pasture Volunteers were also on site to direct efforts. They
			divided into two teams and trimmed brambles and scrubbed many of the
			benches around the site, taking on these challenges with enthusiasm and
			energy.
		</p>
		<p>
			It was a lovely warm evening and there was a spectacular sunset that can
			be appreciated from the Pasture, because of the absence of buildings on
			the horizon.
		</p>
		<p>
			Their help was much appreciated. Long Lane Pasture relies on volunteers to
			maintain and develop the site. Groups are welcome to visit the pasture, by
			prior arrangement. Please contact enquiries@longlanepasture.org. The next
			event there is Moth Day on Saturday 27 August. More information can be
			found at www.longlanepasture.org
		</p>
		<p>
			Currently, 4th East Finchley rainbow group is in danger of closing if more
			adult volunteers can't be found. Please get in touch by emailing,
			4theastfinchleyguides@googlemail.com if you are interested in
			volunteering.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
