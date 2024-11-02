import type { Config } from 'tailwindcss';
import defaultTheme from "tailwindcss/defaultTheme";
import flowbitePlugin from "flowbite/plugin"

export default {
	content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Afacad", ...defaultTheme.fontFamily.sans],
			},

			colors: {
				primary: { 50: '#F0EBE3', 
					100: '#FFF2E1', 
					200: '#EAD8C0', 
					300: '#D1BB9E', 
					400: '#A79277', 
					500: '#A66E38', 
					600: '#914F1E', 
					700: '#825B32', 
					800: '#654520', 
					900: '#493628'},
			}
		},
	},

	plugins: [flowbitePlugin],
} as Config;
