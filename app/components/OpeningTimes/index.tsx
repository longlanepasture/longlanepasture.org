import { season } from "../../../lib/helpers/season";

export function OpeningTimes() {
	const winter = [
		"🌧",
		"November-March",
		"Coordinate with volunteers for access",
	];
	const summer = ["☀️", "April-October", "Every Day: 9am-7pm or dusk"];
	const volunteering = ["📅", "All Year", "Saturday volunteering: 10am-12noon"];
	const lines = season.winter
		? [winter, summer, volunteering]
		: [summer, winter, volunteering];
	return (
		<>
			<h3>
				Opening Times <sub>† unless too wet</sub>
			</h3>
			<table className="data" role="presentation">
				<tbody>
					{lines.map(([icon, title, hours]) => (
						<tr key={title}>
							<td>{icon}</td>
							<td>{title}</td>
							<td>{hours}</td>
						</tr>
					))}
				</tbody>
			</table>
			{season.winter ? (
				<p className="highlight">
					Winter is a time for the pasture to recover and regenerate, allowing
					us to carry out essential maintenance like clearing brambles,
					pollarding trees, and restoring ponds. To coordinate visits during
					this period, please get in touch with our volunteers.
				</p>
			) : (
				<p className="highlight">
					Opening times depend on volunteer availability. While we aim to open
					during scheduled hours, we cannot always guarantee it.
				</p>
			)}
		</>
	);
}
