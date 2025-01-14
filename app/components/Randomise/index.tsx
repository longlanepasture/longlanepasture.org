"use client";

import type { JSX } from "react";
import React from "react";

export default function Randomise({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	const childrenArray = React.Children.toArray(children);
	childrenArray.sort(() => Math.random() - 0.5);
	return <>{childrenArray}</>;
}
