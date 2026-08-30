import "./style.css";
import { createSlider } from "../components/slider/slider.ts";

const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const THEME_LOCAL_STORAGE_KEY = "theme";

export function setupToolbar(element: HTMLDivElement) {
	const theme = getThemeFromLocalStorage();
	setDarkTheme(theme);
	const isDarkTheme = theme == DARK_THEME;

	element.classList.add("toolbar");
	element.appendChild(createTitle());
	element.appendChild(createSlider(isDarkTheme, toggleDarkTheme));
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

function setDarkTheme(theme: string) {
	document.documentElement.dataset.theme = theme;
}

function getThemeFromLocalStorage() {
	return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) ?? LIGHT_THEME;
}

function toggleDarkTheme(shouldEnable: boolean) {
	const theme = shouldEnable ? DARK_THEME : LIGHT_THEME;

	localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
	setDarkTheme(theme);
}
