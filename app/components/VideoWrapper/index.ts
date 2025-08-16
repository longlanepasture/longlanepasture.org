"use client";

import type { ReactElement } from "react";
import { useEffect } from "react";

export function VideoWrapper({
	children,
	playbackRate,
}: {
	children: ReactElement<{ id?: string }>;
	playbackRate?: number;
}) {
	useEffect(() => {
		const { id } = children.props;
		if (!id) return;
		const video = document.getElementById(id) as HTMLVideoElement;
		if (playbackRate) video.playbackRate = playbackRate;
	});

	return children;
}
