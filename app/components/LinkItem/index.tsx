import Link from "next/link";
import type { JSX } from "react";

export function LinkItem({
	children,
	name,
	path,
}: {
	children?: React.ReactNode;
	name: string;
	path: string;
}): JSX.Element {
	const external = path.startsWith("http");
	const rel = external ? "noopener" : "next";
	const taregt = external ? "_blank" : undefined;
	const label = external ? `${name} (external link)` : `${name} page`;
	return (
		<Link
			href={path}
			rel={rel}
			target={taregt}
			aria-label={label}
			prefetch={!external}
		>
			{children ?? name}
		</Link>
	);
}
