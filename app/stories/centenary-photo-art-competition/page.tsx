import { mergeMetadata } from "../../../lib/helpers";
import { NavigationLink } from "../../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Centenary Photo & Art Competition",
	description:
		"A competition to celebrate the centenary of the Long Lane Pasture nature reserve",
	alternates: {
		canonical: "http://the-archer.co.uk/archive/2012/2012Jul04.pdf",
	},
	openGraph: {
		images: [
			{
				url: "https://longlanepasture.org/assets/history/centenary-photo-art-competition.jpg",
				alt: "Centenary Photo & Art Competition",
			},
		],
	},
});

export default () => (
	<article id="centenary-photo-art-competition">
		<h2>Centenary Photo & Art Competition</h2>
		<figure className="feature-image">
			<img
				src="/assets/history/centenary-photo-art-competition.jpg"
				alt="Centenary Photo & Art Competition"
			/>
		</figure>
		<p>
			One hundred years ago, in 1912, Long Lane Pasture was purchased for public
			enjoyment and recreation. To commemorate this landmark our Photo and Art
			Competition has been launched to create a visual record of the site
			through the seasons.
		</p>
		<p>
			Entries will be displayed in an exhibition at the Arts Depot, North
			Finchley, during October 2012 and will be considered for inclusion in our
			2013 Long Lane Pasture Calendar.
		</p>
		<p>
			Artists and photographers are very welcome at the Pasture every weekend
			and Bank Holidays (10am-6pm), and at other times on request. View location
			in <NavigationLink to="visit">visitor information page</NavigationLink>.
		</p>
		<p>
			The Competition is open to everyone, but must be photographs, paintings or
			drawings of Long Lane Pasture in 2012.
		</p>
		<p>
			There will be prizes in each category for 1st (Ł50), 2nd (Ł25) and 3rd
			(Ł10).
		</p>
		<h4>Photographs</h4>
		<ul>
			<li>Prints must be between 7x5ins and A4 size</li>
			<li>
				Prints must be submitted on good quality photographic or inkjet photo
				paper with the entrants name clearly on the back
			</li>
		</ul>
		<h4>Paintings / Drawings</h4>
		<li>Maximum size A3</li>
		<li>
			Framed, preferably glazed and ready to hang with the entrants name clearly
			on the back
		</li>
		<p>
			Entries can be for sale at the Arts Depot, but we request that 50% of sale
			income is donated to the Long Lane Pasture Trust. Copyright will be
			retained by the entrant, but Long Lane Pasture Trust reserves the right to
			use entrants' work for promotional purposes. Whilst we will do our best to
			ensure the safety of work during the competition process, we cannot take
			responsibility for any loss or damage.
		</p>
		<p>
			Please bring entries to Long Lane Pasture on Saturday mornings, 10am - 12
			noon.
		</p>
		<p>
			In case of difficulty with this time or place, or other Competition
			matters, please contact Maureen Delandro to make alternative arrangements.
		</p>
		<p>
			PLEASE INCLUDE THE COMPLETED{" "}
			<a href="/assets/history/centenary-form.pdf" target="_blank">
				COMPETITION FORM
			</a>{" "}
			WITH YOUR ENTRIES
		</p>
		<h4>Closing date: 15th September 2012</h4>
		<p className="end">
			<i>
				<NavigationLink to="stories">More stories</NavigationLink>
			</i>
		</p>
	</article>
);
