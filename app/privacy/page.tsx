import { mergeMetadata } from "../../lib/helpers";
import { ContactUsLink } from "../components/ContactUsLink";
import { HorizontalLine } from "../components/HorizontalLine";
import { NavigationLink } from "../components/NavigationLink";

export const metadata = mergeMetadata({
	title: "Privacy Notice for Long Lane Pasture website",
	description:
		"This privacy notice explains how we use any personal information we collect about you when you use this website.",
});

export default () => (
	<article>
		<h2>Privacy Notice</h2>
		<p>
			<small>Last updated: Sep 2024</small>
		</p>
		<p>
			This website does not collect or pass on personal information to third
			parties.
		</p>
		<p>
			We use Google Maps{" "}
			<strong>
				iframe<sup>†</sup>
			</strong>{" "}
			to display a map with the location of Long Lane Pasture. By using this
			website, you agree to be bound by{" "}
			<a
				href="https://policies.google.com/privacy"
				target="_blank"
				rel="noopener noreferrer"
			>
				Google's Privacy Policy
			</a>
			.
		</p>
		<blockquote>
			<small>
				<sup>†</sup> An "iframe" is an HTML element that allows an external
				webpage to be embedded within an HTML document. The content of the
				iframe is provided by Google Maps.
			</small>
		</blockquote>
		<p>
			Aside from Google Maps, we do not use any analytics, tracking, advertising
			services, embedded content, social media plugins, forms, cookies, or
			third-party services that may collect personal information.
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
