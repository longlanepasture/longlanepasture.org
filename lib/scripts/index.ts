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

async function notice(): Promise<void> {
	const notice = document.querySelector(".notice");
	if (!notice) return;
	const shouldShowNotice = await fetch("/api/notice")
		.then((response) => response.text())
		.then((remoteState) => /^t/i.test(remoteState));
	if (!shouldShowNotice) return notice.remove();
	const DISMISS_NOTICE_UNTIL = "kJRPXQY6";
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
