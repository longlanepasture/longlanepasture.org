import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Pasture's 100 years",
	description:
		"An article about the Long Lane Pasture in 2012, as appeared in The Archer newspaper.",
	alternates: {
		canonical: "https://www.the-archer.co.uk/archive/2012/2012Nov05.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/2012-11 pastures-100-years.jpg",
				alt: "Pasture friend Linda Dolata shows off some of the art work. Photo by Diana Walsh.",
			},
		],
	},
});

export default () => (
	<article id="pastures-100-years">
		<h2>Pasture's 100 years</h2>
		<p className="tagline">
			As published on{" "}
			<a
				href="https://www.the-archer.co.uk/archive/2012/2012Nov05.pdf"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The Archer"
			>
				The Archer
			</a>
			, November 2012
		</p>
		<figure className="feature-image">
			<img
				src="/assets/history/2012-11 pastures-100-years.jpg"
				alt="Pasture friend Linda Dolata shows off some of the art work. Photo by Diana Walsh."
			/>
			<figcaption>
				Pasture friend Linda Dolata shows off some of the art work. Photo by
				Diana Walsh.
			</figcaption>
		</figure>
		<p>
			<strong>
				To celebrate 100 years of the Long Lane Pasture, an exhibition of
				paintings, sketches and photographs ran at artsdepot, North Finchley,
				throughout the month of October, showing more than 100 views of the
				pasture, its wildlife, flowers and some quirky observations
			</strong>
		</p>
		<p>
			Titles such as Fox by Moonlight, Bee at Sunset, Chaffinch in Snowy
			Hawthorn, Contorted Hazel, Ladybird on Ropesnake and Pasture with Clouds
			give some indication of the variety on view.
		</p>
		<p>
			This was added to by pupils from Year 5 at Tudor Primary School, who had
			visited the pasture during Environment Week. The lovely work produced by
			the nine- and ten-year-olds in Chestnut Class proved their interest in
			art, nature and the environment, for which they were awarded a special
			certificate.
		</p>
		<p>
			If you missed the exhibition, selected entries will appear in the Long
			Lane Pasture Calendar 2013, which will be available soon. Long Lane
			Pasture, which was originally used for grazing and to grow hay for horses,
			was purchased by the council in 1912 for public enjoyment and recreation.
			Local residents had a long struggle to make it what it is today. For
			further details visit: www.longlanepasture.org
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
