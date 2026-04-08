import { mergeMetadata } from "../../lib/helpers";
import { homepage } from "../../package.json";
import { ContactUsLink } from "../components/ContactUsLink";
import { HorizontalLine } from "../components/HorizontalLine";
import { NavigationLink } from "../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Privacy Notice for Long Lane Pasture website",
	description:
		"This privacy notice explains how we use any personal information we collect about you when you use this website.",
	alternates: {
		canonical: `${homepage}/privacy/`,
	},
});

export default () => (
	<article>
		<h2>Privacy Notice</h2>
		<p>
			<small>Last updated: Apr 2026</small>
		</p>
		<p>
			We do not store your personal data on our servers, and we do not send
			personal data to third parties from our own systems.
		</p>
		<p>
			On the Visitor Information page, Google Maps is loaded only if you click
			the "Load map" button. If you choose to load it, your browser connects
			directly to Google and Google may process data such as your IP address and
			browser/device details under{" "}
			<a
				href="https://policies.google.com/privacy"
				target="_blank"
				rel="noopener noreferrer"
			>
				Google's Privacy Policy
			</a>
			.
		</p>
		<p>
			We use local browser storage (localStorage) on your device to remember
			your preferences, including dismissing notices and whether you have chosen
			to load Google Maps. This preference data stays in your browser and is not
			stored remotely by us.
		</p>
		<p>
			Aside from the optional Google Maps embed, we do not use analytics,
			advertising trackers, social media plugins, or remote profiling tools.
		</p>
		<p>
			Your privacy is important to us. If you have any questions about this
			notice, please <ContactUsLink />.
		</p>
		<p>
			We reserve the right to update this privacy notice at any time without
			prior notice. You are encouraged to check this page periodically for any
			updates. Please note that this privacy notice applies only to this
			website. If you follow a link to another website, please review their
			privacy notice.
		</p>
		<HorizontalLine />
		<p>
			Now that you're familiar with our Privacy Policy, why not plan your visit
			to Long Lane Pasture? Check out our{" "}
			<NavigationLink to="visit">Visitor Information page</NavigationLink> to
			learn about opening times, how to get here, and the wildlife you can
			expect to see.
		</p>
	</article>
);
