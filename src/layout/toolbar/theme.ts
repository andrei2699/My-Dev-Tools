const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const THEME_LOCAL_STORAGE_KEY = "theme";

export function setDarkTheme(theme: string): boolean {
	document.documentElement.dataset.theme = theme;
	return theme == DARK_THEME;
}

export function getThemeFromLocalStorage() {
	return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) ?? LIGHT_THEME;
}

export function toggleDarkTheme(shouldEnable: boolean) {
	const theme = shouldEnable ? DARK_THEME : LIGHT_THEME;

	localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
	setDarkTheme(theme);
}
