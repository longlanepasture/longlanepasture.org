export function OpeningTimes() {
	const winter = ["🌧", "November-March", "Weekends, bank holidays: 10am-3pm"];
	const summer = ["☀️", "April-October", "Every Day: 9am-7pm or dusk"];
	const volunteering = ["📅", "All Year", "Saturday volunteering: 10am-12noon"];
	const lines =
		new Date().getMonth() >= 10 || new Date().getMonth() <= 2
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
		</>
	);
}
