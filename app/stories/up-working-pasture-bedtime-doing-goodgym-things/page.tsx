import { mergeMetadata } from "../../../lib/helpers";
import { ContactUsLink } from "../../components/ContactUsLink";
import { DynamicPicturesGallery } from "../../components/DynamicPicturesGallery";
import { NavigationLink } from "../../components/NavigationLink";

const pictures: string[] = [
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-1.jpg",
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-2.jpg",
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-3.jpg",
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-4.jpg",
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-5.jpg",
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-6.jpg",
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-7.jpg",
	"/assets/stories/up-working-pasture-bedtime-doing-goodgym-things-8.jpg",
];

export const metadata = mergeMetadata({
	title: "Up working pasture bedtime, doing Goodgym things",
	description: "6 Goodgymers helped their local community in Barnet",
	alternates: {
		canonical:
			"https://www.goodgym.org/v3/reports/up-working-pasture-bedtime-doing-goodgym-things",
	},
});

export default () => (
	<article id="pastures-past">
		<h2>Up working pasture bedtime, doing Goodgym things</h2>
		<p className="tagline">
			By As published on{" "}
			<a
				href="https://www.goodgym.org/v3/reports/up-working-pasture-bedtime-doing-goodgym-things"
				target="_blank"
				rel="noopener"
				aria-label="Read the full article in The GoodGym"
			>
				GoodGym
			</a>
			, April 2025
		</p>
		<p>
			<strong>
				Six sturdy Goodgymmers met at the Phoenix for our regular group session.
				We welcomed{" "}
				<a
					href="https://www.goodgym.org/v3/profile/lucy-goldsmith"
					target="_blank"
					rel="noopener"
				>
					Lucy
				</a>{" "}
				for the first time, a keen and capable runner, as well as our regular
				crew,{" "}
				<a
					href="https://www.goodgym.org/v3/profile/beattie"
					target="_blank"
					rel="noopener"
				>
					Beattie
				</a>{" "}
				and{" "}
				<a
					href="https://www.goodgym.org/v3/profile/rachel-melinek"
					target="_blank"
					rel="noopener"
				>
					Rachel
				</a>
				,{" "}
				<a
					href="https://www.goodgym.org/v3/profile/anthony-mak-fan"
					target="_blank"
					rel="noopener"
				>
					Anthony
				</a>{" "}
				and our excellent photographer,{" "}
				<a
					href="https://www.goodgym.org/v3/profile/theodore-smith"
					target="_blank"
					rel="noopener"
				>
					Theodore
				</a>
				.
			</strong>
		</p>
		<DynamicPicturesGallery pictures={pictures} />
		<p>
			Following a quick warm up down the side of the cinema (with thanks to{" "}
			<a
				href="https://www.goodgym.org/v3/profile/rachel-melinek"
				target="_blank"
				rel="noopener"
			>
				Rachel
			</a>{" "}
			for the evenings conversational topic: things you thought were bad at the
			time, but turned out to be good - lots of COVID stories), we crossed the
			nearby junction then scooted our way through the quieter roads and back
			alleys to Long Lane Pasture for our evening deeds. There, met by our
			inimical host Donald, we were handed ploggers, rakes, a pitchfork and
			barrows and split into two teams.
		</p>
		<p>
			Team one jogged around the site litter-picking and tidying, while team two
			began clearing dead brambles to pile into a dead hedge. The second task is
			making way for a silver birch to be planted near the gates in memory of
			Wayne, a key figure in the Pasture's founding, who helped the community
			secure the original lease from Barnet Council. The brambles were piled
			into a dead hedge that will also stop visitors to the site from crossing
			through a key 'bee lane', from the apiaries to the nearby flower meadow.
		</p>
		<p>
			With a solid four barrows of brambles and a sack of rubbish out of the
			way, we then jogged back to the Cinema, satisfied we'd made our impact on
			ourselves and for the community.
		</p>
		<p>
			If you have an idea for a project you'd like us to assist with, please{" "}
			<ContactUsLink />.
		</p>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
