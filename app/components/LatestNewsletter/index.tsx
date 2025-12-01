import { audioNewsletters, newsletters } from "../../../dynamic/newsletters";
import { NavigationLink } from "../NavigationLink";

export const LatestNewsletter = () => {
	const latestNewsletter = newsletters[0];
	const latestAudioNewsletter = audioNewsletters.find(
		({ date }) => date === latestNewsletter.date,
	);
	return (
		<p className="newsletter-banner">
			Read our latest newsletter,{" "}
			<a href={latestNewsletter.url} target="_blank">
				Issue № {latestNewsletter.issue}: {latestNewsletter.date}
			</a>
			.
			{latestAudioNewsletter && (
				<>
					<br />
					Audio review:
					<br />
					<audio
						src={latestAudioNewsletter.url}
						controls
						preload="metadata"
						style={{ height: 24, width: "100%", margin: ".5rem 0 0" }}
						aria-label={`Audio version of the ${latestNewsletter.date} newsletter`}
					/>
				</>
			)}
			<br />
			<small>
				<NavigationLink
					style={{ float: "inline-end" }}
					to="/history"
					anchor="newsletters"
				>
					Newsletter Archive
				</NavigationLink>
			</small>
		</p>
	);
};
