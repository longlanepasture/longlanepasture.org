"use client";

import type { GalleryItem } from "react-image-gallery";
import ReactImageGallery from "react-image-gallery";

export default function PicturesGallery({ pictures }: { pictures?: string[] }) {
	const images: GalleryItem[] =
		pictures
			?.filter(Boolean)
			.map(
				(original: string): GalleryItem => ({
					original,
					originalAlt: "A picture taken in Long Lane Pasture",
				}),
			)
			.sort(() => Math.random() - 0.5) || [];
	return (
		<ReactImageGallery items={images} lazyLoad={true} slideDuration={200} />
	);
}
