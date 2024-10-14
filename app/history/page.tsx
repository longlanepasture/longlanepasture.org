import { navigation } from "../../dynamic/navigation";
import { newsletters } from "../../dynamic/newsletters";
import { mergeMetadata, URLify } from "../../lib/helpers";
import { ContactUsLink } from "../components/ContactUsLink";
import { NavigationLink } from "../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "The history of Long Lane Pasture",
	description:
		"The Pasture is a meadow, which has remained largely undisturbed for centuries.",
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/llp-restoration-plan.jpg",
				alt: "Long Lane Pasture Restoration Plan",
			},
		],
	},
});

export default () => (
	<>
		<article id="about-the-pasture">
			<figure className="hero">
				<img
					src="/assets/history-hero.jpg"
					alt="A view of the main pond in Long Lane Pasture. November, 2007"
				/>
				<figcaption>
					<h2>
						Story of the Pasture
						<a
							href="#about-the-pasture"
							aria-label="Anchor link to About the Pasture"
						></a>
					</h2>
				</figcaption>
			</figure>
			<p className="end">
				<sup>
					<i>
						Photo by{" "}
						<a
							href="https://martinaddison.photography/"
							target="_blank"
							rel="noopener"
						>
							Martin Addison
						</a>
					</i>
				</sup>
			</p>
			<p>
				The Pasture (1.05 ha, 2.6 acres) is a meadow, which has remained largely
				undisturbed for centuries (apart from a small area under cultivation
				during World War 2). It has never been built on. It is within an area
				defined as being 'deprived of public open space'. The land is owned by
				the London Borough of Barnet. It was purchased in 1912 for 'public
				recreation and enjoyment'.
			</p>
			<p>
				Up to the early 1980s (when it was closed to the public because of
				proposed road works) it was well-used by local people and had a public
				footpath across it. Horses grazed here for many years. The Pasture was a
				popular place. There is evidence of many activities on the land: kite
				flying, picnics, pony riding, and nature walks by school children.
			</p>
			<div className="spread">
				{[
					["/assets/history/1917-07%20history.jpg", "July 1917"],
					["/assets/history/1977-04%20history.jpg", "April 1977"],
					["/assets/history/2007-11%20Martin Addison.jpg", "November 2007"],
				].map(([src, date]) => (
					<figure
						key={src}
						style={{ maxWidth: "480px", padding: "0 .25rem" }}
						className="caption-on"
					>
						<img
							src={src}
							alt={`Long Lane Pasture in ${date}`}
							loading="lazy"
						/>
						<figcaption>{date}</figcaption>
					</figure>
				))}
			</div>
			<p>The wildlife here is now of considerable local importance.</p>
			<p>
				In 1999, after years of neglect, the Council decided that the land was
				surplus to requirements and decided to sell it for housing development.
				However, after a public campaign to keep the Pasture as green space,
				this decision was overturned and in 2006 the land was designated for
				community use.
			</p>
			<p>
				In 2005 the <NavigationLink to="trust" /> was granted a licence to
				access the land, and work began to restore the Pasture, clear rubbish
				and improve the land for wildlife.{" "}
				<NavigationLink to="the-future-for-long-lane-pasture">
					Read all about it
				</NavigationLink>
				.
			</p>
			<p>
				<img
					src="/assets/llp-restoration-plan.jpg"
					alt="Long Lane Pasture Restoration Plan"
					loading="lazy"
				/>
			</p>
			<p>
				In June 2009 a 25-year lease to manage the Pasture was granted to the
				Long Lane Pasture Trust (to an agreed Management Plan) for the benefit
				of wildlife and the community.{" "}
				<NavigationLink to="long-wait-is-over-for-long-lane-pasture">
					Read all about it
				</NavigationLink>
				.
			</p>
		</article>
		<article id="a-public-greenspace">
			<h2>
				A Public Green space for a Century
				<a
					href="#a-public-greenspace"
					aria-label="Anchor link to A Public Greenspace for a Century"
				></a>
			</h2>
			<p>
				Long Lane Pasture was purchased by the Finchley Urban District Council
				for public enjoyment and recreation on 22 February 1912. On 22 February
				2012 the Mayor of Barnet planted an oak tree on the embankment area to
				commemorate this landmark. It is an English oak, grown locally by one of
				our <NavigationLink to="contribute">Friends</NavigationLink>.
			</p>
			<p>
				The Pasture has changed little in{" "}
				<NavigationLink to="100 years">100 years</NavigationLink>, except that
				its cut hay no longer provides fodder for London's horses, and horses no
				longer graze here. Many of the wildflowers on the restored damp
				meadowland are now thriving again and although there is no public
				footpath leading to a bridge across the railway (one of its old names
				was Iron Bridge Field), there is a network of paths for visitors to make
				a less hurried visits. Some Finchley residents can recall varied leisure
				activities here: it was the home ground of the local football team
				'Squires United; many enjoyed family picnics; children used to fly their
				kites; and classes from Manorside School came for nature study and
				afterwards made displays of grasses and wild flowers. It is proving as
				popular today as it was at the turn of the 20th century. The Pasture has
				outlived many threats and is now half its original size, but continues
				as a delightful green space for both people and wildlife.
			</p>
			<p>
				In 2012 Long Lane Pasture has launched a Centenary Photo & Art
				Competition to create a visual record of the Pasture. An Exhibition of
				over one hundred photographs and paintings of Long Lane Pasture was held
				at the Finchley ArtsDepot in October.
			</p>
			<p>
				In 2012 / 2013 Long Lane Pasture was awarded a prestigious Community
				Green Flag Award - the national award for well managed, high quality
				green spaces. The Pasture is one of 43 community green flags awarded
				across London, and that year the only one in London Borough of Barnet.
				For more information visit:{" "}
				<a
					href="https://www.greenflagaward.org/"
					rel="noopener"
					target="_blank"
					aria-label="Green Flag Award - the national award for well managed, high quality
				green spaces"
				>
					The Green Flag Award
				</a>
				. We have since repeatedly been awarded the Green Flag, and are very
				proud of this achievement.
			</p>
		</article>
		<article id="newsletters">
			<h2>
				📰 Newsletters
				<a href="#newsletters" aria-label="Anchor link to Newsletters"></a>
			</h2>
			<p>
				We publish newsletters.
				<br />
				You can read the latest issue, {newsletters[0].date}:{" "}
				<a href={newsletters[0].url} target="_blank">
					Issue № {newsletters[0].issue}
				</a>
				.
			</p>
			<details>
				<summary>Previous newsletters are available (click here)</summary>
				<ul>
					{newsletters.unshift() &&
						newsletters.map(({ issue, url, date }) => (
							<li key={date}>
								{date}:{" "}
								<a href={URLify(url)} target="_blank">
									Issue № {issue}
								</a>
							</li>
						))}
				</ul>
			</details>
			<p>
				To receive the newsletter by email, please <ContactUsLink />.
			</p>
		</article>
		<article>
			<h2>More stories</h2>
			<details>
				<summary>More stories about Long Lane Pasture</summary>{" "}
				<ul>
					{navigation
						.filter(({ path }) => path.match(/^\/stories\/.+/))
						.map(({ name, path }) => (
							<li key={path}>
								<NavigationLink to={path}></NavigationLink>
							</li>
						))}
				</ul>
			</details>
		</article>
	</>
);
