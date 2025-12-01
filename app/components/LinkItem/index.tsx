import Link from "next/link";
import type { JSX } from "react";

export function LinkItem({
	children,
	name,
	path,
	anchor,
	style,
}: {
	children?: React.ReactNode;
	name: string;
	path: string;
	anchor?: string;
	style?: React.CSSProperties;
}): JSX.Element {
	const external = path.startsWith("http");
	const rel = external ? "noopener" : "next";
	const taregt = external ? "_blank" : undefined;
	const label = external ? `${name} (external link)` : `${name} page`;
	return (
		<Link
			href={path + (anchor ? `#${anchor}` : "")}
			rel={rel}
			target={taregt}
			aria-label={label}
			prefetch={!external}
			style={style}
		>
			{children ?? name}
		</Link>
	);
}
