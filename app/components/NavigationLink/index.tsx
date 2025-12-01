import type { JSX } from "react";
import { navigation } from "../../../dynamic/navigation";
import { LinkItem } from "../LinkItem";

/**
 * Normalise strings for comparison.
 */
const normalise = (string: string): string =>
	string?.toLowerCase?.().replace(/[\s_]/g, "-");

/**
 * Get Link element for a page by substring of the page name or path.
 */
export function NavigationLink({
	children,
	to,
	anchor,
	style,
}: {
	to: string;
	children?: React.ReactNode;
	anchor?: string;
	style?: React.CSSProperties;
	text?: string;
}): JSX.Element | null {
	const page = navigation.find((link) =>
		Object.values(link).some((value: any): boolean =>
			normalise(value.toString?.())?.includes(normalise(to)),
		),
	);
	if (!page) return null;

	const { name, path } = page;

	return (
		<LinkItem name={name} path={path} anchor={anchor} style={style}>
			{children ?? name}
		</LinkItem>
	);
}
