"use client";

import "./style.css";

import { useEffect, useState } from "react";

const VIEW_MAP_KEY = "llp_view_google_map";

export const GoogleMapEmbed = ({
	src,
	altLink,
	title,
}: {
	src: string;
	altLink: string;

	title: string;
}) => {
	const [shouldLoadMap, setShouldLoadMap] = useState(false);

	useEffect(() => {
		if (window.localStorage.getItem(VIEW_MAP_KEY) === "true") {
			setShouldLoadMap(true);
		}
	}, []);

	if (!shouldLoadMap) {
		return (
			<div
				className="map-consent"
				role="group"
				aria-label="Google Maps consent"
				onClick={(event) => {
					if (event.target instanceof HTMLAnchorElement) {
						// Let the link be clickable without triggering the map load
						return false;
					}
					window.localStorage.setItem(VIEW_MAP_KEY, "true");
					setShouldLoadMap(true);
					return true;
				}}
			>
				<p>
					Click to load the live map from Google. By loading the map, you agree
					to Google's{" "}
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						rel="noopener noreferrer"
					>
						Privacy Policy
					</a>
					.<br />
					Alternatively, you can view the location on{" "}
					<a
						href={altLink}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View ${title} on Google Maps`}
					>
						Google Maps
					</a>
					.
				</p>
			</div>
		);
	}

	return (
		<iframe
			src={src}
			style={{ width: "100%", border: "none" }}
			height="450"
			allowFullScreen={true}
			loading="lazy"
			referrerPolicy="no-referrer-when-downgrade"
			title={title}
		></iframe>
	);
};
