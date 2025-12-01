import { LatestNewsletter } from "../LatestNewsletter";
import "./style.css";

export const TemporaryNotice = () => (
	<article className="notice hidden" id="temporary-notice">
		<LatestNewsletter />
		<button className="close">✖</button>
	</article>
);
