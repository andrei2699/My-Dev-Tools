import "./style.css";
import { createSlider } from "../components/slider/slider.ts";
import {
	getThemeFromLocalStorage,
	setDarkTheme,
	toggleDarkTheme,
} from "./theme.ts";

export function setupToolbar(element: HTMLDivElement) {
	const theme = getThemeFromLocalStorage();
	const isDarkTheme = setDarkTheme(theme);

	element.classList.add("toolbar");
	element.appendChild(createTitle());
	element.appendChild(createSpacer());
	element.appendChild(createSlider(isDarkTheme, toggleDarkTheme));
	element.appendChild(createGitHubLink());
}

function createTitle() {
	const span = document.createElement("span");
	const a = document.createElement("a");
	a.href = "/";
	a.textContent = "Dev Tools";

	a.classList.add("toolbar-title");

	span.appendChild(a);

	return span;
}

function createSpacer() {
	const div = document.createElement("div");
	div.classList.add("spacer");
	return div;
}

function createGitHubLink() {
	const a = document.createElement("a");
	a.href = "https://github.com/andrei2699/my-dev-tools";
	a.target = "_blank";
	a.classList.add("github-link");

	a.innerHTML = `
    <svg class="button-icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#github-icon"></use>
    </svg>
    GitHub`;
	return a;
}
