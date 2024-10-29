"use client";

import dynamic from "next/dynamic";

export const DynamicPicturesGallery = dynamic(
	() => import("../PicturesGallery"),
	{
		ssr: false,
	},
);
