import { mergeMetadata } from "../../../lib/helpers";
import { DynamicPicturesGallery } from "../../components/DynamicPicturesGallery";

export const metadata = mergeMetadata({
	title: "The Tale of Oily Pond",
	description:
		"From hidden leaks and black smoke to a thriving wildflower meadow.",
	openGraph: {
		images: {
			url: "/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.30.jpeg",
			alt: "The Tale of Oily Pond",
		},
	},
});

export const pictures: string[] = [
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.30.jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.31 (1).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.31 (2).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.31 (3).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.31 (4).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.31 (5).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.31.jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.32 (1).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.32 (2).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.32 (3).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.32 (4).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.32 (5).jpeg",
	"/assets/stories/story-oil-leak/WhatsApp Image 2025-08-13 at 19.16.32.jpeg",
];

export default () => {
	let i = 0;
	return (
		<article>
			<figure className="hero">
				<img
					src="/assets/stories/story-oil-leak/banner.jpeg"
					alt="The Tale of Oily Pond"
				/>
				<figcaption>
					<h2>The Tale of Oily Pond</h2>
					<p className="tagline">By Donald Lyven</p>
				</figcaption>
			</figure>
			<h3>
				From hidden leaks and black smoke to a thriving wildflower meadow.
			</h3>
			<p className="tagline">August 2025</p>
			<p>
				We had a patch of ground, where Linda's wildflower meadow is, that oozed
				oil. We thought the oil had been dumped from the old garage nearby, long
				gone now.
			</p>
			<p>
				We dug out the contaminated soil & put a pond liner down, & all was ok
				for two years with a lovely pond, but heavy rain one winter caused the
				oil to seep up & the pond got contaminated as the liner lifted up! - &
				it got known as Oily Pond.
			</p>
			<p>
				We would dump bramble & tree cuttings to help asbsorb the oil, but one
				day it was set light to & a tremendous fire took hold, with black smoke,
				& flames continued down the path where oil had also seeped into the
				undergrowth!
			</p>
			<p>
				Then, one day in February 2021. I received a phone call from UK Power
				Network, asking if they could survey our site, as they were losing
				coolant oil from one of their 35kV cables running to East Finchley,
				somewhere along the cables path... A penny drop moment! Two days later,
				they confirmed they found the suspected leak & were gonna dig up the
				contaminated area...
			</p>
			<p>
				They covered the path to the gate with a large temporary roadway &
				brought a mini digger & dumper truck on site. Tonnes of contaminated
				soil was removed, exposing 4 cables, including two oil cooled ones.
			</p>
			<DynamicPicturesGallery pictures={pictures} />
			<p>
				Heavy rain filled the trench so the contaminated water had to be pumped
				out & taken away. The damaged cable was repaired under a hastily erected
				gazebo, & once tested that all was OK, the cables were covered & the
				earth replaced. The works took a month, & by the end of march 2021, we
				were left with a huge earthen scar, sown with an aggressive grass seed
				that grew back too thick. A year later and you wouldn't have known the
				upheaval that had taken place. Two years later, Linda removed patches of
				the grass and turned the area into the wildflower meadow we all enjoy &
				love.
			</p>
		</article>
	);
};
