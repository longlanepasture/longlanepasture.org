import { amenities } from "../../dynamic/amenities";
import { mergeMetadata } from "../../lib/helpers";
import { ContactUsLink } from "../components/ContactUsLink";
import { HorizontalLine } from "../components/HorizontalLine";
import { NavigationLink } from "../components/NavigationLink";
import { OpeningTimes } from "../components/OpeningTimes";
import "./styles.css";

export const metadata = mergeMetadata({
	title: "Visitor Information for Long Lane Pasture",
	description:
		"Everything you need to know about visiting Long Lane Pasture. Opening times, location, and how to get here.",
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/long-lane-pasture-map.svg",
				alt: "Long Lane Pasture Map",
			},
		],
	},
});

export default () => (
	<>
		<article id="come-visit-the-pasture">
			<figure className="hero">
				<img
					src="/assets/visitor-information-hero.jpeg"
					alt="Visitors at Long Lane Pasture"
				/>
				<figcaption>
					<h2>
						Come visit the Pasture
						<a
							href="#come-visit-the-pasture"
							aria-label="Anchor link to Come visit the Pasture"
						></a>
					</h2>
				</figcaption>
			</figure>
			<p>
				The Pasture is a wild meadow. It is a bit rough in places and can be
				very wet after rain and in the late autumn/winter/early spring months.
				Make sure you have stout footwear, particularly at these times of year,
				and watch your step as you wander around. It will take you about 20-30
				minutes to walk around the Pasture, but much longer if you linger awhile
				to appreciate its beauty. A list of wildlife you might see on your visit
				is posted on the Noticeboard by the entrance, where there is a map of
				the site.
			</p>
			<OpeningTimes />
			<p>
				There is one short hard surfaced all-weather footpath, which takes you
				alongside butterfly border and the pond to a seating area. This is
				suitable for those a little unsteady on their feet, for wheelchairs and
				pushchairs. Other access around the Pasture is by way of informal grassy
				footpaths. There are a number of seats provided for visitors.
			</p>
			<p>
				You will see that some areas are not to be walked across. These are
				being kept as undisturbed areas for wildlife. Please observe the
				boundaries of these areas and do not venture into them. Respect wildlife
				at all times: do not pick flowers or take anything from the site - leave
				for others to enjoy. If you see anything unusual, we would love to hear
				from you.
			</p>
			<p>
				Access is free of charge, but as a small registered charity we rely on{" "}
				<NavigationLink to="contribute">donations and support</NavigationLink>{" "}
				to maintain and restore the Pasture.
			</p>
			<h3>Help us keep this space safe and enjoyable for everyone.</h3>
			<ul>
				<li>Respect the plants and wildlife.</li>
				<li>Use bins for litter and waste.</li>
				<li>
					Dogs welcome <strong>on leads</strong>.
				</li>
				<li>No bikes, ball games, or fires.</li>
			</ul>
			<p>
				<NavigationLink to="regulations">
					Read the full regulations
				</NavigationLink>{" "}
				if you are not sure your activity is allowed.
			</p>
			<img
				src="/assets/long-lane-pasture-map.svg"
				alt="Long Lane Pasture Map"
			/>
		</article>
		<article id="wildlife-you-might-see">
			<h2>
				Wildlife you might see
				<a
					href="#wildlife-you-might-see"
					aria-label="Anchor link to Wildlife you might see"
				></a>
			</h2>
			<h3>In the Meadow</h3>
			<ul className="zebra-list">
				<li>
					<strong>Butterflies</strong> gliding across wildflowers
				</li>
				<li>
					<strong>Grasshoppers</strong> leaping through tall grasses
				</li>
				<li>
					<strong>Wasp Spiders</strong> weaving intricate webs
				</li>
				<li>
					<strong>Ladybirds</strong> adding bright spots of color
				</li>
			</ul>
			<div className="stamps">
				<img
					src="/assets/wildlife-128/blister-beetle.jpeg"
					alt="blister beetle"
				/>
				<img src="/assets/wildlife-128/honeybee.jpeg" alt="honeybee" />
				<img
					src="/assets/wildlife-128/speckled-wood-butterfly.jpeg"
					alt="speckled wood butterfly"
				/>
				<img
					src="/assets/wildlife-128/flower-crab-spider.jpeg"
					alt="flower crab spider"
				/>
				<img
					src="/assets/wildlife-128/cinnabar-moth-caterpillar.jpeg"
					alt="cinnabar moth caterpillar"
				/>
				<img src="/assets/wildlife-128/ladybird.jpeg" alt="ladybird" />
				<img src="/assets/wildlife-128/hopper.jpeg" alt="grasshopper" />
				<img src="/assets/wildlife-128/wasp-spider.jpeg" alt="wasp spider" />
			</div>
			<h3>Around the Pond</h3>
			<ul className="zebra-list">
				<li>
					<strong>Moorhens</strong> paddling along the water's edge
				</li>
				<li>
					<strong>Frogs and tadpoles</strong> thriving in spring
				</li>
				<li>
					<strong>Toads and newts</strong> hiding in the shallows
				</li>
				<li>
					<strong>Dragonflies</strong> darting across the surface
				</li>
				<li>
					<strong>Water Boatmen</strong> skating on the water
				</li>
			</ul>
			<div className="stamps">
				<img
					src="/assets/wildlife-128/moorhen-in-brambles.jpeg"
					alt="moorhen"
				/>
				<img
					src="/assets/wildlife-128/emperor-dragonfly.jpeg"
					alt="dragonfly"
				/>
				<img src="/assets/wildlife-128/frog.jpeg" alt="frog" />
				<img src="/assets/wildlife-128/moorhen-in-pond.jpeg" alt="moorhen" />
				<img src="/assets/wildlife-128/young-frog.jpg" alt="young frog" />
			</div>
			<h3>Throughout the Pasture</h3>
			<ul className="zebra-list">
				<li>
					<strong>Birds</strong> singing from the treetops
				</li>
				<li>
					<strong>Foxes</strong> passing quietly through at dawn and dusk
				</li>
				<li>
					<strong>Bank Voles and field mice</strong> scurrying in the
					undergrowth
				</li>
			</ul>
			<div className="stamps">
				<img
					src="/assets/wildlife-128/song-thrush-bird.jpeg"
					alt="song thrush bird"
				/>
				<img src="/assets/wildlife-128/fox.jpeg" alt="fox" />
				<img src="/assets/wildlife-128/bank-vole.jpeg" alt="bank vole" />
				<img src="/assets/wildlife-128/kestrel.jpeg" alt="kestrel" />
			</div>
			<HorizontalLine />
			<p>
				Check out our full{" "}
				<NavigationLink to="species">species checklist</NavigationLink> for a
				complete list of wildlife spotted at Long Lane Pasture. Seen something
				unusual? <ContactUsLink>Let us know!</ContactUsLink>
			</p>
		</article>
		<article id="location">
			<h2>
				Location
				<a href="#location" aria-label="Anchor link to Location"></a>
			</h2>
			<p>
				Long Lane Pasture lies in North London, in the London Borough of Barnet,
				on the border between postal districts N3 and N2. It is bounded by the
				North Circular Road, the Northern Line railway, Pointalls Allotments
				land and Long Lane.
			</p>
			<p>
				<strong>what3words:</strong>{" "}
				<a
					href="https://w3w.co/risks.assume.forest"
					target="_blank"
					rel="noreferrer"
				>
					<strong style={{ color: "rgb(225, 31, 38)" }}>///</strong>
					risks.assume.forest
				</a>
			</p>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.6774081860665!2d-0.1822392865961423!3d51.59659596521669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a02481df38b%3A0x9d4d3e1b839bb764!2sLong%20Lane%20Pasture!5e0!3m2!1sen!2suk!4v1721736907974!5m2!1sen!2suk"
				style={{ width: "100%", border: "none" }}
				height="450"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="Long Lane Pasture Location on Google Maps"
			></iframe>
			<h3>Get Here On Foot</h3>
			<p>
				The entrance to the Pasture is on an access road leading between{" "}
				<strong>280 Long Lane</strong>, opposite the fire station and next to
				the underpass under the North Circular Road, and{" "}
				<strong>84 Rosemary Avenue</strong>. Rosemary Avenue is the continuation
				of Station Road which runs from Finchley Central Station.
			</p>
			<h3>Get Here By Bus</h3>
			<p>Closest bus stops are:</p>
			<ul>
				<li>
					<strong>North circular (406)</strong>
					<ul>
						<li>
							East:{" "}
							<a
								href="https://tfl.gov.uk/bus/stop/490009321E/long-lane/"
								target="_blank"
								rel="noopener"
							>
								Long Lane towards Arnos Grove Or North Finchley
							</a>
							. 0.1 miles walk.
						</li>
						<li>
							West:{" "}
							<a
								href="https://tfl.gov.uk/bus/stop/490009321W/long-lane/"
								target="_blank"
								rel="noopener"
							>
								Long Lane towards Brent Cross
							</a>
							. 0.1 miles walk.
						</li>
					</ul>
				</li>
				<li>
					<strong>East End Rd.</strong>
					<ul>
						<li>
							South:{" "}
							<a
								href="https://tfl.gov.uk/bus/stop/490003670E/basing-way/"
								target="_blank"
								rel="noopener"
							>
								Basing Way towards Highgate
							</a>
							. 0.4 miles walk.
						</li>
						<li>
							North:{" "}
							<a
								href="https://tfl.gov.uk/bus/stop/490003670W/basing-way/"
								target="_blank"
								rel="noopener"
							>
								Basing Way towards Finchley Central
							</a>
							. 0.4 miles walk.
						</li>
					</ul>
				</li>
				<li>
					<strong>Squires Lane</strong>
					<ul>
						<li>
							East:
							<ul>
								<li>
									<a
										href="https://tfl.gov.uk/bus/stop/490009327W1/long-lane"
										target="_blank"
										rel="noopener"
									>
										Long Lane towards towards Finchley Central
									</a>
									. 0.3 miles walk.
								</li>
								<li>
									<a
										href="https://tfl.gov.uk/bus/stop/490009327W/squires-lane-long-lane/"
										target="_blank"
										rel="noopener"
									>
										Squires Lane / Long Lane towards East Finchley Station
									</a>
									. 0.3 miles walk.
								</li>
							</ul>
						</li>
						<li>
							West:
							<ul>
								<li>
									<a
										href="https://tfl.gov.uk/bus/stop/490019117E/vineyard-grove"
										target="_blank"
										rel="noopener"
									>
										{" "}
										Vineyard Grove towards Finchley Central
									</a>
									. 0.3 miles walk.
								</li>
								<li>
									<a
										href="https://tfl.gov.uk/bus/stop/490019118E/avondale-road"
										target="_blank"
										rel="noopener"
									>
										Avondale Road towards Friern Barnet
									</a>
									. 0.3 miles walk.
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<h3>Get Here By Tube</h3>
			<p>
				<strong>Northern Line:</strong>{" "}
				<a
					href="https://tfl.gov.uk/tube/stop/940GZZLUFYC/finchley-central-underground-station"
					target="_blank"
					rel="noopener"
				>
					Finchley Central Station
				</a>{" "}
				is a 15 minute walk (0.7 miles) via Station Road.
			</p>
			<h3>Get Here By Car</h3>
			<p>
				There is <strong>free parking in Long Lane</strong>. Do not park in the
				access road leading up to the Pasture. This is for the use of the
				adjacent householder only.
			</p>
		</article>
		<article id="amenities">
			<h2>
				Amenities
				<a href="#amenities" aria-label="Anchor link to Amenities"></a>
			</h2>
			{amenities.map(
				({
					name,
					description,
					available,
				}: {
					name: string;
					description: string;
					available: boolean;
				}) => (
					<div key={name}>
						<h4 className={available ? "check" : "uncheck"}>{name}</h4>
						<p>{description}</p>
					</div>
				),
			)}
		</article>
	</>
);
