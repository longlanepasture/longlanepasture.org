import { mergeMetadata } from "../../../lib/helpers";
import { ContactUsLink } from "../../components/ContactUsLink";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Plea to preserve pasture",
	description:
		"An article about the Long Lane Pasture in 2012, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://the-archer.co.uk/archive/2012/2012Aug05.pdf",
	},
});

export default () => (
	<article id="plea-to-preserve-pasture">
		<h2>Plea to preserve pasture</h2>
		<p className="tagline">
			By John Lawrence. As published on{" "}
			<a
				href="https://the-archer.co.uk/archive/2012/2012Aug05.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, August 2012
		</p>
		<p>
			<strong>
				The volunteers who run Long Lane Pasture have launched a centenary
				appeal to protect the parcel of natural land and safeguard it for future
				generations.
			</strong>
		</p>
		<p>
			The open space was purchased for public enjoyment in 1912. Six years ago,
			local people saved the pasture from being built over for a housing estate
			and it is now managed by a charitable trust that relies on public
			donations. The trust receives no funding from Barnet Council, which owns
			the land and leases it to the trust.
		</p>
		<p>
			Trust chairman Ann Brown said major capital works to restore the pasture
			over recent years are complete and grants for these have been used up.
		</p>
		<p>
			She said: “We are now appealing for funds to keep our work going, to
			manage the land and keep it for us all to enjoy for years to come. It is
			run on a shoestring, but we need money particularly to pay for insurance,
			for mowers and their fuel, for repairs and for tools and equipment for
			volunteers. Donations, large and small, are enormously appreciated.”
		</p>
		<p>
			Supporters are encouraged to sign up to Gift Aid as this enables the trust
			to reclaim the tax on donations, at no extra cost to the donor. Regular
			donations by banker's order are particularly welcome
		</p>
		<h3>Butterflies and blackberries</h3>
		<p>
			The pasture, situated opposite the fire station in Long Lane, is open
			every weekend and bank holiday from 10am to 5pm†. Its busy schedule of
			summer events has been slightly disrupted by the wet weather. A reception
			and butterfly day on 14-15 July was cancelled as much of the site was
			waterlogged or slippery.
		</p>
		<p>
			Ann added: “We hope people will all be able to visit the Pasture when it
			has dried out a bit. There has been a good show of blackberry flowers so a
			good crop of blackberries to harvest should follow in August and
			September.”
		</p>
		<p>
			Donations can be made via the pasture's website at{" "}
			<NavigationLink to="contribute">the contributions page</NavigationLink> or
			you can get more information by{" "}
			<ContactUsLink>contacting the pasture</ContactUsLink>.
		</p>
		<p>
			<i>
				† Please note opening hours may vary. Please check{" "}
				<NavigationLink to="visit">visitor information</NavigationLink>
			</i>
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
