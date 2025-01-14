"use client";

import type { ReactElement } from "react";
import { useEffect } from "react";

export function VideoWrapper({
	children,
	playbackRate,
}: {
	children: ReactElement;
	playbackRate?: number;
}) {
	useEffect(() => {
		if (!children.props.id) return;
		const video = document.getElementById(
			children.props.id,
		) as HTMLVideoElement;
		if (playbackRate) video.playbackRate = playbackRate;
	});

	return children;
}
