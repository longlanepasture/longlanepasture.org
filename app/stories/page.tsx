import { navigation } from "../../dynamic/navigation";
import { mergeMetadata } from "../../lib/helpers";
import { NavigationLink } from "../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Stories about Long Lane Pasture",
	description:
		"Read stories about the Long Lane Pasture and the people who care for it.",
});

export default () => (
	<article id="stories">
		<figure className="hero">
			<img
				src="/assets/stories-hero.jpg"
				alt="The pasture at sunset early autumn"
			/>
			<figcaption>
				<h2>
					Stories and articles
					<a href="#stories" aria-label="Anchor link to Stories"></a>
				</h2>
			</figcaption>
		</figure>
		<p>
			<a
				href="https://www.the-archer.co.uk/search_results.php?cx=001587731801969052995:wrz3r22be4o&q=%22Long%20Lane%20Pasture%22"
				target="_blank"
				rel="noopener"
			>
				The Archer
			</a>{" "}
			post stories about us every once in a while. Read stories about the Long
			Lane Pasture and the people who care for it.
		</p>
		<ul>
			{navigation
				.filter(({ path }) => path.match(/^\/stories\/.+/))
				.map(({ name, path }) => (
					<li key={path}>
						<NavigationLink to={path}></NavigationLink>
					</li>
				))}
		</ul>
		<p>
			Do you have a story to share?{" "}
			<NavigationLink to="/contribute">let us know</NavigationLink>.
		</p>
	</article>
);
