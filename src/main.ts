import "./global-style.css";
import { setupNavbar } from "./layout/navbar/navbar.ts";
import { setupToolbar } from "./layout/toolbar/toolbar.ts";
import { createHomePage } from "./layout/pages/home-page.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="toolbar"></div>
<div style="display: flex; gap: 1rem; width: 100%; height: 100%">
	<div id="navbar"></div>
	<div id="content" style="width: 100%; height: 100%"></div>
</div>

`;
setupToolbar(document.querySelector<HTMLDivElement>("#toolbar")!);
setupNavbar(
	document.querySelector<HTMLDivElement>("#navbar")!,
	document.querySelector<HTMLDivElement>("#content")!,
	[
		{
			name: "Home",
			link: "home",
			content: createHomePage(),
			isRoot: true,
		},
		{
			name: "News",
			link: "news",
			content: document.createElement("div"),
		},
	],
);
