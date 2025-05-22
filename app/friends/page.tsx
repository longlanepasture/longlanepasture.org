import { friends } from "../../dynamic/friends";
import { mergeMetadata } from "../../lib/helpers";
import { HorizontalLine } from "../components/HorizontalLine";
import { NavigationLink } from "../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Friends of Long Lane Pasture",
	description: "Follow the links to find out more about our friends.",
});

export default () => (
	<>
		<article id="friends-of-long-lane-pasture">
			<h2>
				Friends of Long Lane Pasture
				<a
					href="#friends-of-long-lane-pasture"
					aria-label="Anchor link to Friends of Long Lane Pasture"
				></a>
			</h2>
			<p>
				Friends and donors of Long Lane Pasture play a vital role in maintaining
				this unique green space. Their support enables dedicated volunteers to
				protect wildlife habitats, manage the beautiful wildflower meadows, and
				ensure the site remains accessible to the community. Thanks to their
				contributions, Long Lane Pasture continues to thrive as a peaceful haven
				for nature and a place of learning for visitors of all ages.
			</p>
			<figure>
				<img
					src="/assets/cwhbrown-panoramic-llp.jpg"
					alt="Panoramic view from Octavia Hill in Long Lane Pasture"
				/>
				<figcaption>
					<p>
						<i>
							Panoramic view from Octavia Hill in Long Lane Pasture. Designed by{" "}
							<a
								href="http://www.cwhbrown.com/"
								target="_blank"
								rel="noopener"
								aria-label="Chris Brown's website and portfolio"
							>
								Chris Brown
							</a>
						</i>
					</p>
				</figcaption>
			</figure>
			<table className="links">
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
					</tr>
				</thead>
				<tbody>
					{friends.map(({ name, href, description }) => (
						<tr key={name}>
							<td>
								<a
									href={href}
									target="_blank"
									rel="noopener"
									aria-label={[name, description].join(": ")}
								>
									{name}
								</a>
							</td>
							<td>{description}</td>
						</tr>
					))}
				</tbody>
			</table>
			<HorizontalLine />
			<p>
				Interested in contributing to Long Lane Pasture? Check out our{" "}
				<NavigationLink to="contribute">Contribute page</NavigationLink> to
				learn more.
			</p>
		</article>
	</>
);
