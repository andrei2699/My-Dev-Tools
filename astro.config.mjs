// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://andrei2699.github.io/",
	base: "/My-Dev-Tools",
	redirects: {
		"/": "/My-Dev-Tools/base64-encoder",
	},
});
