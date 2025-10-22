import { mergeMetadata } from "../../lib/helpers/index.ts";
import { ContactUsLink } from "../components/ContactUsLink";
import { DonateButton } from "../components/DonateButton";
import { DynamicVolunteers } from "../components/DynamicVolunteers";
import { HorizontalLine } from "../components/HorizontalLine";
import { NavigationLink } from "../components/NavigationLink";
import "../components/styles/contributors.css";
import { Volunteer } from "../components/Volunteer";

export const metadata = mergeMetadata({
	title: "Contribute to Long Lane Pasture",
	description:
		"Caring for the Long Lane Pasture is a community effort. Find out how you can help support the Trust's work.",
});

export default () => (
	<>
		<article id="contribute-to-long-lane-pasture">
			<figure className="hero">
				<img
					src="/assets/volunteering-hero.jpeg"
					alt="Volunteering in the pasture"
				/>
				<figcaption>
					<h2>
						Contribute to Long Lane Pasture
						<a
							href="#contribute-to-long-lane-pasture"
							aria-label="Anchor link to Contribute to Long Lane Pasture"
						></a>
					</h2>
				</figcaption>
			</figure>
		</article>
		<article id="the-pasture-is-a-community-space">
			<p>
				The pasture is a community space maintained by community members to the
				benefit of all. There are many ways you can take part in caring for the
				pasture.
			</p>
			<Volunteer>
				<p>
					Help with the maintenance of the pasture. Trim, Weed, Cut, Rake, Mow,
					Plant, Prune, Clean, Maintain…
				</p>
				<ul className="checks">
					<li>Necessary tools and equipment provided.</li>
					<li>Volunteering is suitable for all ages.</li>
					<li>
						Most jobs require some physical effort but do not require great
						strength or skill.
					</li>
				</ul>
			</Volunteer>
			<HorizontalLine />
			<p>
				Here are some of the faces you might see on a Saturday morning. Come
				have a biscuit with us! 🍪
			</p>
			<div className="contributors">
				<DynamicVolunteers />
			</div>
			<HorizontalLine />
			<h3>Make a charitable donation</h3>
			<p>
				We receive no funding from the local council and rely on donations to
				undertake our work. By donating, you're not just supporting a green
				space—you're helping us continue to protect biodiversity, maintain safe
				access, and sustain a valuable community resource. Every contribution,
				no matter how small, will make a real difference in maintaining this
				precious pasture for future generations.
			</p>
			<p className="center">
				<DonateButton />
			</p>
			<p>
				Long Lane Pasture Trust is a charity registered in England & Wales (№
				1122236) and is run in accordance with its Trust Deed. Charity details
				are available on{" "}
				<a
					href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/4035882"
					target="_blank"
					rel="noopener"
					aria-label="Long Lane Pasture Trust on the registry"
				>
					the registry
				</a>
				.{" "}
			</p>
			<p>
				Cheques can be sent by mail to No. 256 Long Lane, London N3 2RN. If you
				would like to make a donation any other way, please <ContactUsLink />.
			</p>
			<HorizontalLine />
			<h3>Initiate educational or community projects</h3>
			<p>
				We welcome proposals for educational or community projects that can
				benefit the community and the pasture. We regularly{" "}
				<NavigationLink to="eco-warriors-plant-for-the-future">
					host school groups
				</NavigationLink>{" "}
				. If you have an idea for a project you'd like us to assist with, please{" "}
				<ContactUsLink />.<br />
			</p>
		</article>
	</>
);
