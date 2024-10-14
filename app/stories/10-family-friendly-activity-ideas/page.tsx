import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Creative, family-friendly activity ideas to do at Long Lane Pasture",
	description:
		"10 creative, family-friendly activity ideas you can do on your next visit to Long Lane Pasture",
	openGraph: {
		images: {
			url: "https://longlanepasture.org/assets/stories/stories-clouds.jpeg",
			alt: "Find shapes in the clouds at Long Lane Pasture",
		},
	},
});

export default () => {
	let i = 0;
	return (
		<article>
			<figure className="hero">
				<img
					src="/assets/stories/stories-activities.jpg"
					alt="Family activity ideas at Long Lane Pasture"
				/>
				<figcaption>
					<h2>
						10 Family-Friendly Activity Ideas to Consider for Your Next Visit
					</h2>
				</figcaption>
			</figure>
			<p className="tagline">September 2024</p>
			<p>
				Long Lane Pasture is a beautiful natural space that lends itself to all
				kinds of creative, family-friendly activities.
			</p>
			<br />
			<h3>{++i}. Wildlife Treasure Hunt</h3>
			<p>
				Create a list of plants, animals, or insects that children and adults
				can spot in the pasture. Include things like butterflies, wildflowers,
				birds, or interesting shaped trees. Kids can tick off each item when
				they find it. You could even add challenges like taking a photo or
				sketching what they see.
			</p>
			<h3>{++i}. Nature-Inspired Art Workshop</h3>
			<p>
				Bring sketchbooks, pencils, or watercolours and have a family art
				session in the open air. Encourage children to paint or draw what they
				see around them, whether it's a specific tree, a patch of wildflowers,
				or a bird. You could even collect leaves or flowers (responsibly) to
				press or use for a collage back at home.
			</p>
			<h3>{++i}. Mini Bug Safari</h3>
			<p>
				Equip kids with magnifying glasses or simple bug catchers (transparent
				containers) and go on a bug hunt. Teach them to look under leaves, in
				the grass, or on flowers. After observing the insects, gently return
				them to their habitat. You can even give the bugs fun names and make up
				stories about their lives in the pasture.
			</p>
			<figure className="feature-image">
				<img
					src="/assets/stories/stories-insects.jpeg"
					alt="Insects at Long Lane Pasture"
					width="640"
				/>
			</figure>
			<h3>{++i}. Mindfulness Walk with Storytelling</h3>
			<p>
				Take a slow, mindful walk through the pasture, noticing all the sights,
				sounds, and smells. Along the way, tell a nature-themed story that
				incorporates elements of what you see. This could be an invented story
				about a creature living in the pasture or a more structured tale that
				teaches kids about nature conservation.
			</p>
			<h3>{++i}. Nature-Themed Yoga</h3>
			<p>
				Have a yoga session with your family, with poses inspired by the natural
				surroundings. Use poses like "tree," "butterfly," or "frog," and
				encourage deep breathing to connect with the calmness of the
				environment. Kids will love mimicking the animals and plants they see.
			</p>
			<h3>{++i}. Seasonal Nature Journals</h3>
			<p>
				Give each child a journal to track the changes in the pasture over the
				seasons. Visit regularly and have them write down or draw what's new. In
				the spring, they might see fresh flowers blooming; in autumn, they could
				observe leaves falling. This activity helps them understand seasonal
				cycles and appreciate the natural world.
			</p>
			<h3>{++i}. Cloud Watching and Nature Meditations</h3>
			<p>
				Lay down on the grass and spend time watching the clouds drift by.
				Encourage everyone to spot shapes in the clouds and make up stories
				about what they see. Follow this with a short family meditation,
				focusing on the sounds of the birds, wind, and rustling leaves, making
				it a relaxing and mindful moment.
			</p>
			<figure className="feature-image">
				<img
					src="/assets/stories/stories-clouds.jpeg"
					alt="Find shapes in the clouds at Long Lane Pasture"
					width="640"
				/>
			</figure>
			<h3>{++i}. Pasture Photography Contest</h3>
			<p>
				Equip kids with disposable cameras or your phone and encourage them to
				take photos of their favourite things in the pasture. Afterward, you can
				have a family photography competition where everyone gets to show off
				their best pictures. You could even frame the photos or make a collage
				to remember the day.
			</p>
			<h3>{++i}. Outdoor Picnic and Storytelling</h3>
			<p>
				Bring a nourishing picnic and enjoy a meal together in the pasture.
				During the picnic, talk about where the food ingredients come from and
				how they connect to nature, like how bees help pollinate the plants that
				provide fruits and vegetables.
			</p>
			<h3>{++i}. Just Pop In</h3>
			<p>
				Simply pop in without any plans and see what you can discover. You might
				see a new bird, find a hidden spot, or meet a friendly volunteer. The
				pasture is full of surprises, so let your curiosity guide you.
			</p>
			<figure className="feature-image">
				<img
					src="/assets/stories/stories-swing.jpeg"
					alt="Swing at Long Lane Pasture"
					width="640"
				/>
			</figure>
			<p>
				Make sure to check our{" "}
				<NavigationLink to="visit">visitor information page</NavigationLink>{" "}
				before you go. Remember to respect the natural environment and wildlife
				while you explore the pasture.
			</p>
		</article>
	);
};
