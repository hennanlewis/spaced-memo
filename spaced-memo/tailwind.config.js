/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"tone1": "var(--color-tone1)",
				"tone1-var": "var(--color-tone1-variant)",
				"tone2": "var(--color-tone2)",
				"tone2-var": "var(--color-tone2-variant)",
				"tone3": "var(--color-tone3)",
				"tone3-var": "var(--color-tone3-variant)",
			},
			fontFamily: {
				signika: ["var(--font-signika)"],
			},
			screens: {
				xs: "360px",
				sm: "640px",
			},
			textColor: {
				skin: {
					main: "var(--color-text-main)",
					support: "var(--color-text-support)",
					muted: "var(--color-text-muted)",
				},
			},
			backgroundColor: {
				skin: {
					main: "var(--color-background-main)",
					support: "var(--color-background-support)",
					muted: "var(--color-background-muted)",
				},
			},
		},
	},
	plugins: [],
}
