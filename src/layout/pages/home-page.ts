export function createHomePage() {
	const page = document.createElement("div");

	page.innerHTML = `
  <h2>Full-height Vertical Navbar</h2>
  <h3>Try to scroll this area, and see how the sidenav sticks to the page</h3>
  <p>Notice that we have set overflow:auto to sidenav. This will add a scrollbar when the sidenav is too long (for example if it has over 50 links inside of it).</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>
  <p>Some text..</p>

  <p>Some text..</p>
`;

	return page;
}
