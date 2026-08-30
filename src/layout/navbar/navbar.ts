import "./style.css";

export interface NavBarItem {
	name: string;
	link: string;
}

export function setupNavbar(element: HTMLDivElement, items: NavBarItem[]) {
	const list = document.createElement("ul");

	const pathName = window.location.pathname.replace("/", "");

	for (const item of items) {
		const navItem = createNavItem(item, pathName);
		list.appendChild(navItem);
	}

	element.appendChild(list);
}

function createNavItem(item: NavBarItem, pathName: string) {
	const listItem = document.createElement("li");
	const anchor = document.createElement("a");

	anchor.textContent = item.name;
	anchor.href = item.link;

	if (pathName == item.link) {
		anchor.classList.add("active");
	}

	listItem.appendChild(anchor);

	return listItem;
}
