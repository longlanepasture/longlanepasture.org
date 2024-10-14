import { mergeMetadata } from "../../../lib/helpers";
import { ContactUsLink } from "../../components/ContactUsLink";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Eco-warriors plant for the future",
	description:
		"An article about the school activities in Long Lane Pasture, April 2024, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "http://www.the-archer.co.uk/archive/2024/2024Apr08.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/2024-04 eco-warriors-plant-for-the-future.jpg",
				alt: "Eco-warriors plant for the future",
			},
		],
	},
});

export default () => (
	<>
		<article id="eco-warriors-plant-for-the-future">
			<h2>
				Eco-warriors plant for the future
				<a
					href="#eco-warriors-plant-for-the-future"
					aria-label="Anchor link to Eco-warriors plant for the future"
				></a>
			</h2>
			<p className="tagline">
				By Jacqueline Lotan. As published on{" "}
				<a
					href="http://www.the-archer.co.uk/archive/2024/2024Apr08.pdf"
					target="_blank"
					rel="noopener"
					aria-label="Read the full article in The Archer"
				>
					The Archer
				</a>
				, April 2024
			</p>
			<figure className="feature-image">
				<img
					src="/assets/history/2024-04 eco-warriors-plant-for-the-future.jpg"
					alt="Eco-warriors plant for the future"
				/>
				<figcaption>
					Rooted in nature: Tudor Primary pupils plant new saplings at Long Lane
					Pasture
				</figcaption>
			</figure>
			<p>
				<strong>
					Children from Tudor Primary School joined hands with volunteers at
					Long Lane Pasture to plant trees, initiating the growth of a mini
					forest in the heart of our neighbourhood.
				</strong>
			</p>
			<p>
				The young eco-warriors eagerly got their hands dirty, digging holes,
				placing saplings, and nurturing the beginnings of what promises to be a
				flourishing area of new growth in the green haven opposite the fire
				station in Long Lane, N3.
			</p>
			<p>
				By actively participating in the creation of the mini forest, they
				learned the importance of environmental conservation, teamwork and
				community involvement.
			</p>
			<p>
				Tudor Primary School is just a short walk from the pasture and pupils
				have been enjoying half-termly visits there to take part in creative
				outdoor learning sessions led by local artist{" "}
				<a
					href="https://www.laurafoxartist.com/"
					target="_blank"
					rel="moopener"
				>
					Laura Fox
				</a>
				.
			</p>
			<p>
				Laura says: “The importance for children to spend ime outside in nature
				is indisputable for physical and mental health, so sessions have been
				designed to give time for play and open research of the environment.
				“For example, it is not uncommon for a child to be averse to touching
				mud. But by the end of the sessions, they love the sensation and have
				overcome a personal challenge.”
			</p>
			<p className="end">
				<i>
					<NavigationLink to="stories">More stories</NavigationLink>
				</i>
			</p>
		</article>
		<article>
			If you have an idea for a project you'd like us to assist with, please{" "}
			<ContactUsLink />.
		</article>
	</>
);
