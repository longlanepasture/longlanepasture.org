import { species } from "../../dynamic/species";
import { mergeMetadata } from "../../lib/helpers";
import { HorizontalLine } from "../components/HorizontalLine";
import { NavigationLink } from "../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Checklist of Recorded Species at Long Lane Pasture.",
	description:
		"A checklist of species recorded at Long Lane Pasture, including plants, birds, mammals, insects, and other wildlife.",
});

export default () => (
	<>
		<article id="species">
			<h2>
				Checklist of Recorded Species
				<a
					href="#species"
					aria-label="Anchor link to Checklist of Recorded Species"
				></a>
			</h2>
			<p>
				This is a list of all species recorded at Long Lane Pasture.
				<br />* indicates that this species is known to have bred on the
				Pasture.
			</p>
		</article>
		{Object.entries(species).map(([title, list]) => (
			<article key={title} id={title.replace(/\s*/g, "-")}>
				<h3>{title}</h3>
				<ul>
					{list
						.map((item) => Object.entries(item))
						.map(([[commonName, scientificName]]) => (
							<li key={commonName}>
								{Array.isArray(scientificName) ? (
									<>
										{commonName}:{" "}
										<ul>
											{scientificName
												.map((i) => Object.entries(i))
												.map(([[item, scientificName]]) => (
													<li key={item}>
														{[item, scientificName].filter(Boolean).join(": ")}
													</li>
												))}
										</ul>
									</>
								) : (
									[commonName, scientificName].filter(Boolean).join(": ")
								)}
							</li>
						))}
				</ul>
				<HorizontalLine />
				<p>
					Check our{" "}
					<NavigationLink to="visit">visitor information</NavigationLink> and
					come by see how many you can spot for yourself!
				</p>
			</article>
		))}
	</>
);
