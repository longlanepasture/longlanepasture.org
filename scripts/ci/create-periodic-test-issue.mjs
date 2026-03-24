const labelName = "periodic-test-failure";
const title = "Periodic tests failing";

const token = process.env.GITHUB_TOKEN;
const repository = process.env.GITHUB_REPOSITORY;
const runId = process.env.GITHUB_RUN_ID;
const sha = process.env.GITHUB_SHA;
const eventName = process.env.GITHUB_EVENT_NAME;
const serverUrl = process.env.GITHUB_SERVER_URL || "https://github.com";

if (!token) {
	throw new Error("Missing GITHUB_TOKEN");
}

if (!repository || !repository.includes("/")) {
	throw new Error("Missing or invalid GITHUB_REPOSITORY");
}

const [owner, repo] = repository.split("/");
const runUrl = `${serverUrl}/${owner}/${repo}/actions/runs/${runId}`;

const request = async (path, options = {}) => {
	const response = await fetch(`https://api.github.com${path}`, {
		...options,
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
			"Content-Type": "application/json",
			...(options.headers || {}),
		},
	});

	if (!response.ok) {
		const body = await response.text();
		throw new Error(`${response.status} ${response.statusText}: ${body}`);
	}

	if (response.status === 204) {
		return null;
	}

	return response.json();
};

const ensureLabel = async () => {
	try {
		await request(`/repos/${owner}/${repo}/labels/${labelName}`);
	} catch (error) {
		if (!String(error.message).startsWith("404")) {
			throw error;
		}

		await request(`/repos/${owner}/${repo}/labels`, {
			method: "POST",
			body: JSON.stringify({
				name: labelName,
				color: "d73a4a",
				description: "Automated issue for periodic test failures",
			}),
		});
	}
};

const getLatestCommitterLogin = async () => {
	if (!sha) {
		return null;
	}

	try {
		const commit = await request(`/repos/${owner}/${repo}/commits/${sha}`);
		return commit?.author?.login || commit?.committer?.login || null;
	} catch (error) {
		// Do not fail issue creation if commit metadata is unavailable.
		console.warn(
			`Could not resolve commit author for ${sha}: ${error.message}`,
		);
		return null;
	}
};

const assignIssueToUser = async (issueNumber, username) => {
	if (!username) {
		return;
	}

	try {
		await request(`/repos/${owner}/${repo}/issues/${issueNumber}`, {
			method: "PATCH",
			body: JSON.stringify({ assignees: [username] }),
		});
	} catch (error) {
		// Assignment can fail for external contributors or users without assignment access.
		if (String(error.message).startsWith("422")) {
			console.warn(`Could not assign issue to ${username}: ${error.message}`);
			return;
		}

		throw error;
	}
};

const main = async () => {
	await ensureLabel();
	const latestCommitter = await getLatestCommitterLogin();

	const openIssues = await request(
		`/repos/${owner}/${repo}/issues?state=open&labels=${encodeURIComponent(labelName)}&per_page=100`,
	);

	const body = [
		"The scheduled test run failed.",
		"",
		`- Workflow run: ${runUrl}`,
		`- Commit: ${sha}`,
		`- Trigger: ${eventName}`,
		"",
		"Please investigate and fix the failure.",
	].join("\n");

	if (openIssues.length > 0) {
		const issueNumber = openIssues[0].number;
		await assignIssueToUser(issueNumber, latestCommitter);

		await request(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`, {
			method: "POST",
			body: JSON.stringify({ body }),
		});
		return;
	}

	const createdIssue = await request(`/repos/${owner}/${repo}/issues`, {
		method: "POST",
		body: JSON.stringify({
			title,
			body,
			labels: [labelName],
		}),
	});

	await assignIssueToUser(createdIssue.number, latestCommitter);
};

await main();
