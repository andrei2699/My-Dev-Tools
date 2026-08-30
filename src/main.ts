import "./global-style.css";
import { setupNavbar } from "./layout/navbar/navbar.ts";
import { setupToolbar } from "./layout/toolbar/toolbar.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="toolbar"></div>
<div id="navbar"></div>
<div id="content"></div>

`;

setupToolbar(document.querySelector<HTMLDivElement>("#toolbar")!);
setupNavbar(document.querySelector<HTMLDivElement>("#navbar")!, [
	{
		name: "Home",
		link: "home",
	},
	{
		name: "News",
		link: "news",
	},
]);
