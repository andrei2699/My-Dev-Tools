import "./style.css";

export interface NavBarItem {
	name: string;
	link: string;
	content: HTMLDivElement;
	isRoot?: boolean;
}

export function setupNavbar(
	element: HTMLDivElement,
	contentElement: HTMLDivElement,
	items: NavBarItem[],
) {
	const list = document.createElement("ul");

	const pathName = window.location.pathname.replace("/", "");

	for (const item of items) {
		const navItem = createNavItem(item, pathName, contentElement);
		list.appendChild(navItem);
	}

	element.appendChild(list);
}

function createNavItem(
	item: NavBarItem,
	pathName: string,
	contentElement: HTMLDivElement,
) {
	const listItem = document.createElement("li");
	const anchor = document.createElement("a");

	anchor.textContent = item.name;
	anchor.href = item.link;

	if (pathName == item.link || (item.isRoot && !pathName)) {
		anchor.classList.add("active");
		contentElement.appendChild(item.content);
	}

	listItem.appendChild(anchor);

	return listItem;
}
