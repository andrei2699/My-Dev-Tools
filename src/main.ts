import "./global-style.css";
import { setupNavbar } from "./layout/navbar/navbar.ts";
import { setupToolbar } from "./layout/toolbar/toolbar.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div id="toolbar"></div>
<div id="navbar"></div>


<div style="margin-left:130px;padding:1px 16px;height:1000px;">
  <h2>Full-height Vertical Navbar</h2>
  <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
  <p>Notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
</div>

<div class="ticks"></div>



<a href="https://github.com/andrei2699/my-dev-tools" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a>
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

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
