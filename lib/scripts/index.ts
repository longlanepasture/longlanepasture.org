start();
function start() {
	document.querySelector("nav")?.addEventListener("click", (event) => {
		if ((event.target as any)?.getAttribute("href")?.startsWith("#!")) {
			event.preventDefault();
			return;
		}
		(event.target as HTMLAnchorElement)?.blur();
	});

	notice();
}

function notice() {
	const notice = document.querySelector(".notice");
	const DISMISS_NOTICE_UNTIL = "kJRPXQY6";
	if (!notice) return;
	const time = window.localStorage.getItem(DISMISS_NOTICE_UNTIL);
	if (time && Number(time) > Date.now()) {
		notice.remove();
		return;
	}
	window.localStorage.removeItem(DISMISS_NOTICE_UNTIL);
	notice.classList.remove("hidden");
	notice.querySelector("button")?.addEventListener("click", (event) => {
		(event.target as HTMLButtonElement)?.closest(".notice")?.remove();
		window.localStorage.setItem(
			DISMISS_NOTICE_UNTIL,
			(Date.now() + 1000 * 60 * 60 * 24 * 30).toString(),
		);
	});
}

export {};
