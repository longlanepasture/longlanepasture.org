import { mergeMetadata } from "../../../lib/helpers";
import { DynamicPicturesGallery } from "../../components/DynamicPicturesGallery";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "The Tale of Oily Pond",
	description:
		"From hidden leaks and black smoke to a thriving wildflower meadow.",
	openGraph: {
		images: {
			url: "/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.30.jpeg",
			alt: "The Tale of Oily Pond",
		},
	},
});

const pictures: string[] = [
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.30.jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.31 (1).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.31 (2).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.31 (3).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.31 (4).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.31 (5).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.31.jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.32 (1).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.32 (2).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.32 (3).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.32 (4).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.32 (5).jpeg",
	"/assets/stories/the-tale-of-oily-pond/WhatsApp Image 2025-08-13 at 19.16.32.jpeg",
];

export default () => {
	let i = 0;
	return (
		<article>
			<figure className="hero">
				<img
					src="/assets/stories/the-tale-of-oily-pond/banner.jpeg"
					alt="The Tale of Oily Pond"
				/>
				<figcaption>
					<h2>The Tale of Oily Pond</h2>
					<p className="tagline">Adapted from Donald Lyven</p>
				</figcaption>
			</figure>
			<h2>
				From hidden leaks and black smoke to a thriving wildflower meadow.
			</h2>
			<p className="tagline">August 2025</p>
			<p>
				Before it became Jubilee Meadow, the ground was a troubled place. Oil
				oozed up through the soil, and for years we assumed it was the legacy of
				a long-demolished garage nearby.
			</p>
			<p>
				We dug out the contaminated earth and laid down a pond liner, creating a
				lovely pond that lasted two years. But one winter, heavy rain lifted the
				liner, and oil seeped back in, poisoning the water. It got known as Oily
				Pond.
			</p>
			<p>
				We tried to manage the problem by dumping bramble and tree cuttings to
				absorb the oil. Then one day, disaster struck: the pile was set alight.
				Flames roared, black smoke filled the air, and fire spread along the
				path where oil had soaked into the undergrowth.
			</p>
			<p>
				The true cause remained a mystery until February 2021, when UK Power
				Network phoned unexpectedly. They suspected a leak in one of their 35kV
				oil-cooled cables running to East Finchley—somewhere beneath our land.
				Suddenly, everything made sense.
			</p>
			<p>
				Within days, they confirmed the leak and began excavation. A temporary
				roadway was laid across the path, and heavy machinery moved in. Tonnes
				of contaminated soil were dug out, revealing four massive cables, two of
				them oil-filled. When rainwater flooded the trench, polluted water had
				to be pumped away. Beneath a makeshift gazebo, engineers repaired the
				damaged line, tested it, and finally refilled the ground.
			</p>
			<p>
				By late March, the work was finished. What remained was a great scar of
				raw earth, hastily sown with coarse grass that quickly smothered the
				site. A year later, the damage was barely visible. And two years on,
				Linda began lifting patches of grass to sow wildflowers.
			</p>
			<p>
				Today, that once-blighted ground flourishes as Jubilee Meadow—a riot of
				colour, alive with bees and butterflies, a place reborn from fire and
				oil into beauty.
			</p>
			<DynamicPicturesGallery pictures={pictures} />
			<p>
				<i>Photos by Donald Lyven</i>
			</p>
			<p className="end">
				<i>
					<NavigationLink to="stories">More stories</NavigationLink>
				</i>
			</p>
		</article>
	);
};
