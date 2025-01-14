import type { JSX } from "react";
import { navigation } from "../../../dynamic/navigation";
import { LinkItem } from "../LinkItem";

/**
 * List of navigation links.
 */
export function NavList({
	filter,
}: {
	filter?: "nav" | "footer" | "internal";
}): JSX.Element {
	return (
		<ul>
			{navigation
				.filter(({ path, footer, nav }) => {
					switch (filter) {
						case "nav":
							return !!nav;
						case "footer":
							return !!footer;
						case "internal":
							return !path.startsWith("http");
						default:
							return true;
					}
				})
				.map(({ path, name }) => (
					<li key={path}>
						<LinkItem name={name} path={path}>
							{name}
						</LinkItem>
					</li>
				))}
		</ul>
	);
}
