/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				figtree: ["Figtree", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				gray: {
					"light": "#D2D6D8",
					"medium": "#565D62",
					"dark": "#44494D",
					"50opacity": "rgba(68,73,77,0.50)",
					"25opacity": "rgba(68,73,77,0.25)",
					"10opacity": "rgba(68,73,77,0.1)",
				},
				pink: {
					"light": "#FEE8D0",
					"dark": "#D79489",
					"25opacity": "rgba(215,148,137,0.25)",
				},
				green: {
					"light": "#9ec9ab",
					"dark": "#4fb567",
				},
			},
		},
	},
	plugins: [tailwindcssAnimate],
};

