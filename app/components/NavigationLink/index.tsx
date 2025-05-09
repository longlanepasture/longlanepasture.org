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
}: {
	to: string;
	children?: React.ReactNode;
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
		<LinkItem name={name} path={path}>
			{children ?? name}
		</LinkItem>
	);
}
