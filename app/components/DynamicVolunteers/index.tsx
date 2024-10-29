"use client";

import dynamic from "next/dynamic";
import { volunteers } from "../../../dynamic/volunteers/index.ts";

const Randomise = dynamic(() => import("../Randomise/index.tsx"), {
	ssr: false,
});

export const DynamicVolunteers = () => (
	<Randomise>
		{volunteers.map(({ src, alt }) => (
			<figure key={alt}>
				<img src={src} alt={alt} loading="lazy" />
				<figcaption>{alt}</figcaption>
			</figure>
		))}
	</Randomise>
);
