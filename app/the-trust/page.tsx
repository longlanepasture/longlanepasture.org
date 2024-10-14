import { records } from "../../dynamic/records";
import { mergeMetadata } from "../../lib/helpers";
import { NavigationLink } from "../components/NavigationLink";
import { VideoWrapper } from "../components/VideoWrapper";

export const metadata = mergeMetadata({
	title: "The Long Lane Pasture Trust",
	description:
		"Long Lane Pasture Trust is a charity registered in England & Wales (№ 1122236) and is run in accordance with its Trust Deed.",
});

export default () => (
	<>
		<article id="green-flag-award-winners">
			<figure className="hero">
				<img
					src="/assets/green-flag-award-2024-25.jpeg"
					alt="Green Flag Award 2024-25"
				/>
				<figcaption>
					<h2>
						Green Flag Award Winners
						<a
							href="#green-flag-award-winners"
							aria-label="Anchor link to Green Flag Award Winners"
						></a>
					</h2>
				</figcaption>
			</figure>
			<p>
				We are absolutely delighted to have been{" "}
				<a
					href="https://www.greenflagaward.org/park-summary/?park=1920"
					target="_blank"
					rel="noopener"
					aria-label="Long Lane Pasture's page on the Green Flag Award website"
				>
					awarded a Green Flag.
				</a>
			</p>
		</article>
		<article id="long-lane-pasture-trust">
			<h2>
				Long Lane Pasture Trust
				<a
					href="#long-lane-pasture-trust"
					aria-label="Anchor link to Long Lane Pasture Trust"
				></a>
			</h2>
			<p>
				Long Lane Pasture Trust is a charity registered in England & Wales (№
				1122236) and is run in accordance with its{" "}
				<a href="/assets/documents/llp-trust-deed.pdf" target="_blank">
					Trust Deed
				</a>
				. Charity details are available on{" "}
				<a
					href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/4035882"
					target="_blank"
					rel="noopener"
					aria-label="Long Lane Pasture Trust on the registry"
				>
					the registry
				</a>
			</p>
			<p>
				The Trust was established in April 2006 in order to protect, restore and
				manage the Pasture. It holds a 25 year lease from London Borough of
				Barnet and is responsible for maintaining and safeguarding the land for
				the benefit of the community. The Trust took over the assets and
				replaced the now defunct Long Lane Pasture Action Group, a pressure
				group set up to prevent houses being build on the land.
			</p>
			<p>
				The Trust is managed wholly by volunteers and has no paid staff. Long
				Lane Pasture Trust relies on donations to protect, maintain and restore
				the Pasture. It has received generous grants from the Postcode Lottery
				Trust, Panton Trust, Rowse Honey, Big Lottery (Awards For All and BBC
				Breathing Places), the City Bridge Trust, the Milly Apthorp Charitable
				Trust, Grassroots Grants, and Neighbourhood Renewal. Organisations which
				have supported our work include BTCV, The Finchley Society, and The
				Barnet Federation of Allotment Societies. Above all, we have received
				many donations from individuals without whose contributions we would not
				have been able to safeguard this land.
			</p>
			<p>
				We appreciate all donations, large or small. If you would like to make a
				donation, please visit our <NavigationLink to="contribute" /> page.
			</p>
		</article>
		<article id="aerial">
			<VideoWrapper playbackRate={0.75}>
				<video
					autoPlay
					muted
					loop
					playsInline
					controls={false}
					id={Math.random().toString(36).replace(/^\d\./, "")}
				>
					<source src="/assets/llp.mp4" type="video/mp4" />
				</video>
			</VideoWrapper>
		</article>
		<article id="annual-reports-and-accounts">
			<h2>
				Annual Reports and Accounts
				<a
					href="#annual-reports-and-accounts"
					aria-label="Anchor link to Annual Reports and Accounts"
				></a>
			</h2>
			<p>
				Details of the Trust's achievements and finances are available in its
				annual reports and accounts.
			</p>
			<div className="grid">
				{records.map(([year, { account, report }]) => (
					<p key={year}>
						<strong>{year}</strong>:{" "}
						{report ? (
							<a href={report} target="_blank">
								Annual Reports
							</a>
						) : null}
						{account && report ? ", " : null}
						{account ? (
							<a href={account} target="_blank">
								Accounts
							</a>
						) : null}
					</p>
				))}
			</div>
		</article>
	</>
);
